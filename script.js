const workouts = [
    {
        id: 1, name: "Bench Press", category: "Chest", image: "images/bench press image.png", video:"videos/bench press video.webm", steps: [
            "Lie on the bench.",
            "Extend your arms and grab the bar evenly, with your hands slightly wider than shoulder-width apart.",
            "Bring your shoulder blades back and tuck them into the bench.",
            "Arch your lower back and plant your feet flat on the floor.",
            "Take a breath, unrack the bar, and bring it over your chest.",
            "Inhale again and lower the barbell to your lower chest, tapping it slightly.",
            "Hold for a moment and press the bar until your elbows are straight. Exhale.",
        ]
    },
    {
        id: 2, name: "Incline Bench Press", category: "Chest", image: "images/incline bench press image.png", video:"videos/incline bench press video.webm", steps: [
            "Lie back on the incline bench and grab the bar with an even overhand grip. The bar should be close enough to unrack without overextending your body.",
            "Bring your shoulders back, engage your abs, and plant your feet on the floor.",
            "Take a breath and unrack the bar by locking out your elbows.",
            "Bring the barbell over your chest and take another breath.",
            "Lower the weight to your mid-chest and pause for a moment.",
            "Press the bar in a straight line and exhale near the top.",
            "Once finished, carefully bring the bar over your head and rack it before relaxing."
        ]
    },
    {
        id: 3, name: "Decline Bench Press", category: "Chest", image: "images/decline bench press image.png", video:"videos/decline bench press video.webm", steps: [
            "Lie down on the bench, positioning your forehead directly under the bar.",
            "Grab the barbell with a double overhand grip. Your arms should be more than shoulder-width apart.",
            "Bring your shoulders back, engage your abs, and take a breath.",
            "Unrack the bar carefully and bring it in over your chest.",
            "Take another breath and lower the barbell to your lower chest.",
            "Tap your torso lightly and press the barbell straight up, exhaling near the top.",
            "Once finished, bring the barbell over your head and rack it before relaxing your body."
        ]
    },
    {
        id: 4, name: "chest Fly Machine", category: "Chest", image: "images/chest fly machine image.png", video:"videos/chest fly machine video.webm", steps: [
            "Select the appropriate load and adjust the seat height. The machine's handles should be at chest level when you sit.",
            "Sit down, bring your shoulders back, and reach to the sides to grab the handles.",
            "Engage your abs and take a breath.",
            "Squeeze your chest and bring your arms in, tapping your knuckles lightly in front of your chest as you breathe out.",
            "Bring your arms to your sides, feeling your chest muscles stretch. Breathe in."
        ]
    },
    {
        id: 5, name: "Push Ups", category: "Chest", image: "images/push ups image.png", video:"videos/push ups video.webm", steps: [
            "Get down on all fours.",
            "Extend your body into a push-up position. Have your hands flat on the floor, fingertips rotated slightly out, and shoulder blades retracted.",
            "Have your legs straight and your toes supporting your lower body. Your ankles, knees, hips, and shoulders should be in a straight line.",
            "Take a breath and lower yourself by bending your elbows.",
            "Descend as low as possible—ideally, until your face is an inch or two from the floor.",
            "Hold the bottom position for a moment and press yourself back to the top as you exhale."
        ]
    },
    {
        id: 6, name: "Lat Pulldown", category: "Back", image: "images/lat pulldown image.png", video:"videos/lat pulldown video.webm", steps: [
            "Select the appropriate load.",
            "Adjust the thigh pad. Your legs should fit snugly.",
            "Stand up and grab the handles with an even overhand grip (palms facing forward).",
            "Keep your arms straight and sit down, securing your legs under the pad.",
            "Bring your shoulders back and take a breath.",
            "Pull the handles down, tucking your elbows and bringing them in line with your torso. Breathe out.",
            "Extend your arms slowly and breathe in."
        ]
    },
    {
        id: 7, name: "Seated Cable Row", category: "Back", image: "images/seated cable row image.png", video:"videos/seated cable row video.webm", steps: [
            "Attach a curved bar to a seated cable row machine.",
            "Select the appropriate weight.",
            "Sit down, place your feet on the platform, and bend your knees slightly.",
            "Lean forward and grab the bar with a double overhand grip (palms facing down).",
            "Lean back to lift the weight from its stack, engage your abs, and retract your shoulder blades.",
            "Take a breath and row the bar to your stomach, squeezing your back and breathing out.",
            "Slowly extend your arms and breathe in."
        ]
    },
    {
        id: 8, name: "T-Bar Row", category: "Back", image: "images/t bar row image.png", video:"videos/t bar row video.webm", steps: [
            "Add some weight to the T-bar station.",
            "Step on the platform, lean forward, and grab the handles with an overhand grip.",
            "Retract your shoulder blades, engage your abs, and inhale.",
            "With your back neutral, push through your heels and extend your hips a bit to lift the weight off the floor.",
            "Keep your torso almost parallel with the floor and have your arms straight.",
            "Inhale again and pull the weight until the handles get close to your torso. Breathe out at the top.",
            "Extend your arms as you breathe in. Don't set the weight on the floor."
        ]
    },
    {
        id: 9, name: "Back Extension", category: "Back", image: "images/back extension image.png", video:"videos/back extension video.webm", steps: [
            "Set yourself up on a back extension machine. Have your hips and thighs against the pad and your ankles locked on the foot brace.",
            "Engage your abs, cross your arms in front of your chest, and take a breath.",
            "Lower yourself by bending at the hips and move down until you feel a stretch in your hamstrings and glutes.",
            "Engage your buttocks and lower back to raise your torso to the top position, pausing for a moment and exhaling."
        ]
    },
    {
        id: 10, name: "Pull Ups", category: "Back", image: "images/pull ups image.png", video:"videos/pull ups video.webm", steps: [
            "Stand underneath a pull-up bar.",
            "Reach up and grab the bar with an even, overhand grip (palms facing forward). Have your hands slightly wider than shoulder level apart.",
            "Bring your shoulders back and engage your abs.",
            "Bend your knees to lift your feet off the floor and hang from the bar.",
            "Take a breath and pull yourself up by bending your elbows.",
            "Move up as much as possible—ideally, until your chin is over the pull-up bar. Exhale.",
            "Lower yourself slowly by extending your elbows and breathe in on the way down."
        ]
    },
    {
        id: 11, name: "Shoulder Press", category: "Shoulders", image: "images/shoulder press image.png", video:"videos/shoulder press video.webm", steps: [
            "Set an adjustable gym bench at a close to 90-degree angle (almost upright back support).",
            "Grab a pair of dumbbells and sit down.",
            "Place the weights on top of your thighs.",
            "Bring your shoulders back, engage your abs, and take a breath.",
            "Lift the dumbbells and kick them up with your thighs.",
            "Position the weights to your sides.",
            "Take another breath and press the dumbbells up and in, tapping them at the top as you exhale.",
            "Lower the dumbbells until your elbows are slightly lower than your shoulders, breathing in on the way down."
        ]
    },
    {
        id: 12, name: "Lateral Raises", category: "Shoulders", image: "images/lateral raise image.png", video:"videos/lateral raise video.webm", steps: [
            "Grab a pair of light dumbbells and stand tall.",
            "Bring your shoulders back, engage your abs, and take a breath.",
            "Lift both arms laterally until your elbows and wrists align with your shoulders. Exhale at the top.",
            "Lower the dumbbells to your sides as you breathe in."
        ]
    },
    {
        id: 13, name: "Rear Delt Fly", category: "Shoulders", image: "images/rear delt fly image.png", video:"videos/rear delt fly video.webm", steps: [
            "Select the appropriate load.",
            "Adjust the seat height. The handles should be at shoulder level when you're seated.",
            "Sit down and grab the handles with your palms facing down.",
            "Bring your shoulders back and take a breath.",
            "Extend your arms to your sides and back as you breathe out.",
            "Bring your arms to the starting position as you breathe in."
        ]
    },
    {
        id: 14, name: "Shrugs", category: "Shoulders", image: "images/shrugs image.png", video:"videos/shrugs video.webm", steps: [
            "Grab a pair of dumbbells, stand tall, position your arms to your sides, and have your wrists neutral.",
            "Bring your shoulders back and engage your abs.",
            "Take a breath, shrug your shoulders as high as possible, and squeeze your trapezius muscle at the top. Keep your arms straight.",
            "Exhale at the top and lower your shoulder blades to the starting position as you breathe in."
        ]
    },
    {
        id: 15, name: "Reverse Katana Extension", category: "Shoulders", image: "images/reverse katana extension image.png", video:"videos/reverse katana extension video.webm", steps: [
            "Stand with your feet shoulder-width apart and hold the cable attachment with both hands.",
            "Bring your shoulders back, engage your abs, and take a breath.",
            "Extend your arms forward at shoulder height with a slight bend in the elbows.",
            "Slowly move the weight outwards, keeping your arms extended, until you feel a stretch in your shoulders.",
            "Pause for a moment at the full extension, squeezing your shoulders.",
            "Return the weight to the starting position as you breathe in."
        ]
    },
    {
        id: 16, name: "Dumbbell Curl", category: "Biceps", image: "images/dumbbell curl image.png", video:"videos/dumbbell curl video.webm", steps: [
            "Grab a pair of dumbbells and stand tall with your feet in a comfortable stance and shoulders retracted.",
            "Have your wrists pointing forward and your arms extended.",
            "Take a breath and curl both dumbbells simultaneously. Lift the weights until your wrists are slightly higher than your elbows and exhale.",
            "Extend your arms slowly and breathe in on the way down."
        ]
    },
    {
        id: 17, name: "Preacher Curl", category: "Biceps", image: "images/preacher curl image.png", video:"videos/preacher curl video.webm", steps: [
            "Set the height of the preacher bench seat. You should be able to comfortably place the back of your upper arms against the pad.",
            "Grab a pair of dumbbells and sit down.",
            "Place your arms on the pad, bend your elbows, and have your wrists facing your body.",
            "Engage your abs and take a breath.",
            "Lower the dumbbells until your arms are straight.",
            "Curl the weights to the top position, stopping when your forearms are almost upright. Breathe out."
        ]
    },
    {
        id: 18, name: "Hammer Curl", category: "Biceps", image: "images/hammer curl image.png", video:"videos/hammer curl.webm", steps: [
            "Grab a pair of dumbbells and stand tall.",
            "Position your arms to your sides with your wrists neutral (palms facing your body).",
            "Bring your shoulders back and take a breath.",
            "Curl both dumbbells simultaneously, lifting them until your wrists are slightly higher than your elbows. Exhale.",
            "Extend your arms fully as you breathe in."
        ]
    },
    {
        id: 19, name: "Triceps Pushdown", category: "Triceps", image: "images/triceps pushdown image.png", video:"videos/triceps pushdown video.webm", steps: [
            "Pick the appropriate load, set the pulley in the highest position, and attach a bar.",
            "Grab the bar with an even overhand grip and bring your elbows to your sides.",
            "Take a couple of steps back and lean your torso slightly forward.",
            "Engage your abs, retract your shoulder blades, and take a breath.",
            "Extend your arms while keeping your elbows to your sides and hold for a moment. Exhale.",
            "Slowly bend your arms until your wrists are slightly higher than your elbows. Breathe in as your arms bend."
        ]
    },
    {
        id: 20, name: "Triceps Extension", category: "Triceps", image: "images/triceps extension image.png", video:"videos/triceps extension video.webm", steps: [
            "Set the pulley at mid-thigh height, attach a rope, and select the correct load.",
            "Grab both ends of the rope with an overhand grip (palms facing your body).",
            "In one motion, turn away from the machine and dip slightly to raise the rope over your shoulders, positioning it behind your head. Your elbows should be bent and to the sides of your head.",
            "With your chest out, lean forward slightly, bring one foot forward for balance, and brace your abs.",
            "Breathe in and extend your elbows, spreading the rope at the top. Exhale.",
            "Slowly bend your elbows as you breathe in."
        ]
    },
    {
        id: 21, name: "Skullcrusher", category: "Triceps", image: "images/skullcrusher image.png", video:"videos/skullcrusher video.webm", steps: [
            "Load a straight bar, lift it off the floor, and support it in front of your chest.",
            "Carefully sit on a flat gym bench and lie back while keeping the bar close to your torso.",
            "Extend your arms and bring your shoulders back. Plant your feet on the floor.",
            "Take a breath and lower the barbell to your forehead or behind your head.",
            "Pause for a moment and extend your arms while keeping your elbows in position. Exhale near the top."
        ]
    },
    {
        id: 22, name: "Leg Press", category: "Legs", image: "images/leg press image.png", video:"videos/leg press video.webm", steps: [
            "Add the appropriate weight to the leg press machine and sit down.",
            "Lift your legs and plant your feet flat on the platform. Have your feet in a comfortable position with your toes pointing slightly out.",
            "Grab the handles to your sides, bring your shoulders back, and engage your abs.",
            "Press the platform and straighten your legs while rotating the handles to remove the safety pins.",
            "Take another breath and lower the platform by bending your knees.",
            "Hold the bottom position for a moment and press the platform away as you exhale.",
            "Once finished, straighten your legs, rotate the handles to put the safety pins on, and rest."
        ]
    },
    {
        id: 23, name: "squat", category: "Legs", image: "images/squat image.png", video:"videos/squat video.webm", steps: [
            "Position the barbell at collarbone height.",
            "Grab the bar with an even overhand grip (palms facing down).",
            "Tuck yourself underneath the bar and place it on top of your trapezius (upper back).",
            "Align your feet, engage your abs, take a breath, and unrack the bar by straightening your legs.",
            "Take a couple of careful steps back and bring your feet shoulder-width apart.",
            "Bring your shoulders back, inhale, and squat until your thighs are parallel to the floor. Keep your heels in contact with the floor.",
            "Hold for a moment and press through your heels to bring yourself back to the top. Exhale near the top.",
            "Once finished, move forward and rack the barbell carefully before relaxing your body."
        ]
    },
    {
        id: 24, name: "Seated Leg Curl", category: "Legs", image: "images/seated leg curl image.png", video:"videos/seated leg curl video.webm", steps: [
            "Select the appropriate load.",
            "Adjust the pad position. It should be against your Achilles' heels as you sit down.",
            "Sit down, position the back of your lower legs against the pad, and grab the handles at your sides.",
            "Bring your shoulders back, engage your abs, and inhale.",
            "Bend your knees by contracting your hamstrings and breathe out.",
            "Hold for a moment and slowly extend your knees as you breathe in."
        ]
    },
    {
        id: 25, name: "Seated Leg Extension", category: "Legs", image: "images/seated leg extension image.png", video:"videos/seated leg extension video.webm", steps: [
            "Select the appropriate load.",
            "Adjust the pad to be against your lower legs, just above your feet when seated.",
            "Sit down, grab the handles by your sides, place your lower shins against the pad, and retract your shoulders.",
            "Take a breath and straighten your legs by engaging your quadriceps.",
            "Lift the weight until your knees straighten, and breathe out.",
            "Hold for a moment and bend your knees slowly as you breathe in."
        ]
    },
    {
        id: 26, name: "Calf Raise", category: "Legs", image: "images/calf raise image.png", video:"videos/calf raise video.webm", steps: [
            "Hold a dumbbell in one hand.",
            "Place the balls of your feet on an elevated platform.",
            "Use your free hand to grab onto something for balance.",
            "Extend your knees, squeeze your glutes, engage your abs, and retract your shoulders.",
            "Take a breath and flex your ankles, bringing your heels to the floor.",
            "Go down as much as possible, feeling your calves stretch.",
            "Hold for a moment and extend your ankles to raise yourself, squeezing your calves at the top as you exhale."
        ]
    },
    {
        id: 27, name: "Running", category: "Cardio", image: "images/treadmill image.png", video:"videos/treadmill video.webm", steps: [
            "Stand on the treadmill and clip the safety key to your tank top or T-shirt.",
            "Start the treadmill and gradually increase the speed from slow walking to a jog.",
            "Maintain an upright posture, direct your gaze forward, and maintain a steady breath.",
            "Keep your arms bent and move them in sync with your strides."
        ]
    },
    {
        id: 28, name: "Stair Master", category: "Cardio", image: "images/stair master image.png", video:"videos/stair master video.webm", steps: [
            "Climb on top of the machine and turn it on.",
            "Select a low speed and grab the handrails for support.",
            "Climb the moving stairs while keeping your shoulders back and abs engaged.",
            "Maintain a steady breath.",
            "Increase the speed to a sustainable pace once you're familiar with the machine."
        ]
    },
    {
        id: 29, name: "Rowing Machine", category: "Cardio", image: "images/rowing machine image.png", video:"videos/rowing machine video.webm", steps: [
            "Select the appropriate resistance and sit down.",
            "Reach forward and grab the cable attachment.",
            "Bend your knees and place your feet flat on the footplates.",
            "With your arms straight, inhale and push yourself back by engaging your thigh muscles.",
            "As you move back, row the cable to your torso and exhale.",
            "Extend your arms and bend your knees simultaneously to bring yourself back to the starting position as you breathe in."
        ]
    },
    {
        id: 30, name: "Battle Ropes", category: "Cardio", image: "images/battle ropes image.png", video:"videos/battle ropes video.webm", steps: [
            "Grab the pair of battle ropes.",
            "Bend your knees and lean forward slightly while keeping your spine neutral.",
            "Take a breath and move one arm up to shoulder level while bringing the opposite one down to your knees.",
            "Immediately move both arms in the opposite direction, changing their position.",
            "Alternate your arms at a steady tempo, breathing regularly as you do.",
            "Go for as long as possible until you feel a deep burn in your upper back and shoulders."
        ]
    }
];

if (window.location.pathname.includes("workouts.html")){
    const container = document.getElementById("workoutContainer");
    const template = document.getElementById("workoutTemplate");
    const filter = document.getElementById("categoryFilter");
    const input= document.getElementById("searchInput");

    filter.addEventListener("change",applyFilters);
    input.addEventListener("input", applyFilters);
    function applyFilters(){
        const selectedCategory = filter.value;
        const inputText = input.value.toLowerCase();
  
        let filteredWorkouts = selectedCategory === "all" ? workouts : workouts.filter(workout => workout.category === selectedCategory);
        filteredWorkouts = inputText === "" ? filteredWorkouts : filteredWorkouts.filter(workout => workout.name.toLowerCase().startsWith(inputText));
        
        renderWorkouts(filteredWorkouts);
    }
    renderWorkouts(workouts);
    function renderWorkouts(filteredWorkouts){
        container.innerHTML= "";
        filteredWorkouts.forEach(workout => {
            const card = template.cloneNode(true);
            card.querySelector(".workout-name").textContent = workout.name;
            card.querySelector(".workout-category").textContent = workout.category;
            card.querySelector(".workout-image").src = workout.image;
            card.querySelector(".workout-image").alt = workout.name;
            card.querySelector(".details-link").href = `details.html?id=${workout.id}`;
            const addBtn = card.querySelector(".add-btn");
            addBtn.addEventListener("click" , () => {
                let plan = JSON.parse(localStorage.getItem("plan")) || [];
                if(!plan.some(w => w.id === workout.id)){
                    plan.push(workout);
                    localStorage.setItem("plan", JSON.stringify(plan));
                    alert("added");
                }
            });
            container.appendChild(card);
        });
    }
}
else if (window.location.pathname.includes("details.html")){
    const searchParams = new URLSearchParams(window.location.search);
    const workoutId = parseInt(searchParams.get("id"))

    const workout = workouts.find(workout => workout.id === workoutId);
    if(workout){
        document.getElementById("workoutName").textContent = workout.name;
        document.getElementById("workoutCategory").textContent = workout.category;
        document.getElementById("workoutVideo").src = workout.video;

        const stepsList = document.getElementById("steps");
        workout.steps.forEach(step => {
            const li = document.createElement("li");
            li.textContent = step;
            stepsList.appendChild(li);
        });

        const addBtn = document.querySelector(".add-btn");
        addBtn.addEventListener("click" , () => {
            let plan = JSON.parse(localStorage.getItem("plan")) || [];

            if(!plan.some(w => w.id === workout.id)){
                plan.push(workout);
                localStorage.setItem("plan", JSON.stringify(plan));
                alert("added");
            }
        });
    }
}