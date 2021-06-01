import CardTable from "./CardTable/CardTable";
import GameInfo from "./GameInfo/GameInfo";
import Chair from "./Chair/Chair";
import ScoreBoard from "./ScoreBoard/ScoreBoard";


const GameRoom: React.FC = () => {
    return <div>
        <GameInfo />
        <CardTable />
        <Chair />
        <ScoreBoard />
    </div>
}

export default GameRoom;