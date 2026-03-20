import { AlertButton } from './AlertButton';

export function Toolbar(){
        return(
            <div className="toolbar" style={{ display: 'flex', gap: '10px', padding: '10px', backgroundColor: '#f4f4f4' }}>
                <AlertButton message="Good Click">
                    Play 
                </AlertButton>    

                <AlertButton message="Nice Click">
                    Pause
                </AlertButton>
            </div>
        )
    }
