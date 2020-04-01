import React from 'react';
import { useSelector } from 'react-redux';
import { getFirebase, isEmpty, isLoaded, ReduxFirestoreQuerySetting, useFirestoreConnect } from 'react-redux-firebase';
import { useParams as useRouteParams } from 'react-router-dom';
import { ApplicationState, Card } from '../../types/state';
import Column from '../../components/Column';
import WithId, { mapWithId } from '../../util/withId';

export interface BoardContextType {
    boardId?: string;
    isAdmin: boolean;
}

export const BoardContext = React.createContext<BoardContextType>({
    boardId: undefined,
    isAdmin: false
});

export const Board: React.FC = () => {
    const { id } = useRouteParams();
    const data = useSelector((state: ApplicationState) => state.firestore.data);

    useFirestoreConnect(() => {
        let userQueries: ReduxFirestoreQuerySetting[] = [];
        if (isLoaded(data.members) && !isEmpty(data.members)) {
            userQueries = Object.keys(data.members).map((uid) => ({ collection: 'users', doc: uid }));
        }

        return [
            { collection: 'boards', doc: id },
            { collection: 'boards', doc: id, subcollections: [{ collection: 'members' }], storeAs: 'members' },
            { collection: 'boards', doc: id, subcollections: [{ collection: 'pending' }], storeAs: 'pending' },
            { collection: 'boards', doc: id, subcollections: [{ collection: 'cards' }], storeAs: 'cards' },
            { collection: 'boards', doc: id, subcollections: [{ collection: 'columns' }], storeAs: 'columns' },
            { collection: 'boards', doc: id, subcollections: [{ collection: 'settings' }], storeAs: 'settings' },
            ...userQueries
        ];
    });

    let columns: React.ReactNode[] = [];
    if (isLoaded(data.columns) && !isEmpty(data.columns) && isLoaded(data.cards)) {
        columns = Object.entries(data.columns).map(([columnId, column]) => {
            let cards: WithId<Card>[] = [];
            if (!isEmpty(data.cards)) {
                cards = mapWithId<Card>(data.cards).filter((card) => card.column === columnId);
            }
            return <Column key={columnId} id={columnId} name={column.name} visible={column.visible} cards={cards} />;
        });
    }

    if (!isLoaded(data.users)) {
        return <>Loading ...</>;
    }

    return <BoardContext.Provider value={{ boardId: id, isAdmin: data.members[getFirebase().auth().currentUser!.uid].admin }}>{columns}</BoardContext.Provider>;
};

export default Board;
