const scene = new THREE.Scene();

         const canvas = document.querySelector('canvas');
         const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, .1, 1000);

         const hLightSkyColor = 0xd4eeff;
         const hLightGroundColor = 0xf5f5f5;
         const hLightIntensity = 1;

         const dLightColor = 0xFFFFFF;
         const dLightIntensity = 1;
         
         const Hlight = new THREE.HemisphereLight(hLightSkyColor, hLightGroundColor, hLightIntensity);
         const Dlight = new THREE.DirectionalLight(dLightColor, dLightIntensity);

         const renderer = new THREE.WebGLRenderer({canvas, alpha: true,});

         let stepId = 0;

         let animCameraToNoise = false;

         let mars = null;

         let step_1 = null;
         let step_1_2 = null;
         let step_2 = null;
         let step_2_2 = null;
         let engine = null;
         let noice = null;
         

         scene.add(Hlight);
         scene.add(Dlight);
         scene.add(Dlight.target);

         let Step_1_Id = 0;
         let Step_2_Id = 0;

         AddObject("/models/NoiseSingle/Noise.gltf", 'noise');
         AddObject("/models/1Step/1/1.gltf", '1step');
         AddObject("/models/1Step/2/2.gltf", '1step2');
         AddObject("/models/2Step/1/1.gltf", '2step');
         AddObject("/models/2Step/2/2.gltf", '2step2');
         AddObject("/models/Engines/1/1.gltf", 'engine');
         AddObject("/models/Mars/mars.gltf", 'mars');

       

         RendererSettings();
         ResizeOnStart();
         requestAnimationFrame(render);
         renderer.setPixelRatio(window.devicePixelRatio);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////          
    function render(time) {
        if (noice != null && step_1 != null)
            step_1.position.set(0,-7,0);
        if (noice != null && step_2 != null)
            step_2.position.set(0,-17,0);
        if (noice != null && step_1_2 != null)
            step_1_2.position.set(0,-7,0);
        if (noice != null && step_2_2 != null)
            step_2_2.position.set(0,-16.5,0);
        if (noice != null && engine != null)
            engine.position.set(0,-17,0);

        if(noice != null){
          noice.rotation.y += 0.003;
        }
        if(mars != null){
          mars.rotation.y -= 0.001;
        }

        switch(Step_1_Id){
            case 0:
                step_1.visible = true;
                step_1_2.visible = false;
            break;
            case 1:
                step_1.visible = false;
                step_1_2.visible = true;
            break;
        }
        switch(Step_2_Id){
            case 0:
                step_2.visible = true;
                step_2_2.visible = false;
            break;
            case 1:
                step_2.visible = false;
                step_2_2.visible = true;
            break;
        }

        renderer.render(scene, camera);
        requestAnimationFrame(render);
        TWEEN.update(time);
    }
    
    document.querySelector("#StepP").addEventListener('click', function(e){
    switch(stepId){
        case 0:
            stepId = 1;
            checkForAnim();
            break;
        case 1:
            stepId = 2;
            checkForAnim();
            break;
        case 2:
            stepId = 3;
            checkForAnim();
            break;
        case 3:
            stepId = 0;
            checkForAnim();
            break;
    }
    });
    
    document.querySelector("#StepM").addEventListener('click', function(e){
        switch(stepId){
            case 3:
                stepId = 2;
                checkForAnim();
                break;
            case 2:
                stepId = 1;
                checkForAnim();
                break;
            case 1:
                stepId = 0;
                checkForAnim();
                break;
            case 0:
                stepId = 3;
                checkForAnim();
                break;
        }
    });


    document.querySelector("#DetailP").addEventListener('click', function(e){
        switch(stepId){
            case 1:
                switch(Step_1_Id){
                    case 0: 
                    Step_1_Id = 1;
                    break;
                    case 1: 
                    Step_1_Id = 0;
                    break;
                }
                break;
            case 2:
                switch(Step_2_Id){
                    case 0: 
                    Step_2_Id = 1;
                    break;
                    case 1: 
                    Step_2_Id = 0;
                    break;
                }
                break;
        }
        });
    document.querySelector("#DetailM").addEventListener('click', function(e){
        switch(stepId){
            case 1:
                switch(Step_1_Id){
                    case 0: 
                    Step_1_Id = 1;
                    break;
                    case 1: 
                    Step_1_Id = 0;
                    break;
                }
                break;
            case 2:
                switch(Step_2_Id){
                    case 0: 
                    Step_2_Id = 1;
                    break;
                    case 1: 
                    Step_2_Id = 0;
                    break;
                }
                break;
        }
        });


    function checkForAnim(){
        switch(stepId){
            case 0:
                document.querySelector("#StepTxt").innerText = "Full";
            anim(camera, 2.5,-8,17, 1000);
            break;
            case 1:
                document.querySelector("#StepTxt").innerText = "First";
            anim(camera, 2.1, -2, 10, 1000);
            break;
            case 2:
                document.querySelector("#StepTxt").innerText = "Second";
            anim(camera, 2.1, -11, 10, 1000);
            break;
            case 3:
                document.querySelector("#StepTxt").innerText = "Engine";
            anim(camera, 2.1, -16, 10, 1000);
            break;
        }
    }
    
    function anim(Obj, X,Y,Z, Time){
        let coords = {x: Obj.position.x, y: Obj.position.y, z: Obj.position.z} // Start at (0, 0)
    let tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
	.to({x: X, y: Y, z: Z}, Time) // Move to (300, 200) in 1 second.
	.easing(TWEEN.Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
	.onUpdate(() => {
        Obj.position.set(coords.x, coords.y, coords.z);

	})
	.start() // Start the tween immediately.

    }
        

// FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS
//#region FUNCTIONS
        function AddObject(Url, Name){
            const gltfLoader = new THREE.GLTFLoader();
            const url = Url;
            gltfLoader.load(url, (gltf) => {
            let root = gltf.scene;
            scene.add(root);

            switch(Name){
              case "noise":   
                noice = root;
              break;
              case "1step":   
                step_1 = root;
              break;
              case "1step2":   
                step_1_2 = root;
              break;
              case "2step":   
                step_2 = root;
              break;
              case "2step2":   
                step_2_2 = root;
              break;
              case "engine":   
                engine = root;
              break;
              case "mars":   
                mars = root;
              break;
             }
        });
        }

     

        function RendererSettings(){
            renderer.setClearColor(0x000000, 0);
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.insertBefore(renderer.domElement, document.body.firstChild);
        }
        function ResizeOnStart(){
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }
        function resizeRendererToDisplaySize(renderer) {
            const canvas = renderer.domElement;
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            const needResize = canvas.width !== width || canvas.height !== height;
            if (needResize) {
            renderer.setSize(width, height, false);
            }
            return needResize;
        }


        document.body.onresize = function(){
            RendererSettings();
            ResizeOnStart(); 
        };
        let timeout = setTimeout(function(){
            noice.add(step_1);
            noice.add(step_2);
            noice.add(step_1_2);
            noice.add(step_2_2);
            noice.add(engine);
            mars.scale.set(.5,.5,.5);
            step_2_2.scale.set(.75,.75,.75);
            mars.position.set(20, -6, -55);
            camera.position.set(2.5,-8,17);
            Dlight.position.set(5,10,2);
        },2000);
  