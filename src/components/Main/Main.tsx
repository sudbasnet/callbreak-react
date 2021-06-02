import { Component } from "react";
import WelcomePage from "./WelcomePage/WelcomePage"


enum EGameStatus { 'NEW', 'PLAYER_SELECT', 'WAITING', 'ACTIVE' };

interface IMainProps {
    status: EGameStatus,
    playerId: string,
    playerName: string,
    gameId: string,
    gameType: string,
    // player x played card y(, and won the hand)
    history: {
        card: string,
        playedBy: string,
        won: boolean
    }[],
}


class Main extends Component {
    state: {
        status: EGameStatus,
        playerId: string,
        playerName: string,
        gameId: string,
        gameType: string,
        history: {
            card: string,
            playedBy: string,
            won: boolean
        }[]
    };

    constructor(props: IMainProps) {
        super(props);

        this.state = {
            status: props.status,
            playerId: props.playerId,
            playerName: props.playerName,
            gameId: props.gameId,
            gameType: props.gameType,
            history: props.history
        }
    }

    render() {
        return <main className="main">
            This is the main page.
            <WelcomePage />
        </main>
    }
};

export default Main;