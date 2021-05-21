import {Canvas} from 'react-three-fiber'
import {Html,  RoundedBox} from 'drei'
import './threeDMask.scss'

export default function threeDMask() {
    return (
        <>
            <Canvas
                colorManagement
                camera={{position: [0, 0, 20], fov: 80}}>
                {/* <Html fullscreen>
                    <div className="mask-container">
                        <h1 className="mask-title">
                            Even in Corona times weddings are happening!
                        </h1>
                    </div>
                </Html> */}

                <RoundedBox args={[1, 1, 1]} radius={0.05} smoothness={4} 
                // {...meshProps}
                >
                    <meshPhongMaterial attach="material" color="#f3f3f3" wireframe />
                </RoundedBox>
            </Canvas>
        </>
    )
}

