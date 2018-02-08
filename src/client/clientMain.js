import SpaaaceClientEngine from './SpaaaceClientEngine';
import SpaaaceGameEngine from '../common/SpaaaceGameEngine';
import '../../assets/sass/main.scss';

// sent to both game engine and client engine
const options = {
    traceLevel: 1000,
    delayInputCount: 8,
    clientIDSpace: 1000000,
    syncOptions: {
        sync: 'extrapolate',
        localObjBending: 0.2,
        remoteObjBending: 0.5
    },
    physics: {
        collisionOptions: {
            COLLISION_DISTANCE: 25
        }
    }
};

// create a client engine and a game engine
const gameEngine = new SpaaaceGameEngine(options);
const clientEngine = new SpaaaceClientEngine(gameEngine, options);

clientEngine.start();
