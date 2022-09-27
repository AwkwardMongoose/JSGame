window.addEventListener('load', function() {
        const player = document.getElementById('player');
        const playerProp = window.getComputedStyle(player);


        window.addEventListener('keydown', (event) => {
            console.log(event.key)
            let currRot = playerProp.transform;
            const upAnim = [
                {transform: currRot},
                {transform: 'rotate(0.5turn)'}
            ]
            const downAnim = [
                {transform: currRot},
                {transform: 'rotate(1turn)'}
            ]
            const leftAnim = [
                {transform: currRot},
                {transform: 'rotate(0.25turn)'}
            ]
            const rightAnim = [
                {transform: currRot},
                {transform: 'rotate(0.75turn)'}
            ]
            const animTiming = {
                duration: 150,
                iterations: 1
            }
            console.log('ROTATION: '+currRot)
            if (event.key == 's') {
                let currTop = parseInt(playerProp.top);
                console.log(player)
                if (currTop <= 30) {
                    if (currRot == 'matrix(1, -2.44929e-16, 2.44929e-16, 1, 0, 0)') {
                        player.style.top = currTop+5+"px";
                    }
                }
                if (currRot != 'matrix(1, -2.44929e-16, 2.44929e-16, 1, 0, 0)') {
                    player.animate(downAnim,animTiming)
                    player.style.transform = 'rotate(1turn)';
                }
            } else if (event.key == 'w') {
                let currTop = parseInt(playerProp.top);
                console.log(player)
                if (currTop >= 0) {
                    if (currRot == 'matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)') {
                        player.style.top = currTop-5+"px";
                    }
                }
                if (currRot != 'matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)') {
                    player.animate(upAnim,animTiming)
                    player.style.transform = 'rotate(0.5turn)';
                }

            } else if (event.key == 'a') {
                let currLeft = parseInt(playerProp.left);
                console.log(player)
                if (currLeft >= 1) {
                    if (currRot == 'matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)') {
                        player.style.left = currLeft-5+"px";
                    }
                }
                if (currRot != 'matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)') {
                    player.animate(leftAnim,animTiming)
                    player.style.transform = 'rotate(0.25turn)';
                }
            } else if (event.key == 'd') {
                let currLeft = parseInt(playerProp.left);
                console.log(player)
                if (currLeft <= 35) {
                    if (currRot == 'matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)') {
                        player.style.left = currLeft+5+"px";
                    }
                }
                if (currRot != 'matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)') {
                    player.animate(rightAnim,animTiming)
                    player.style.transform = 'rotate(0.75turn)';
                }
            }
        })
})