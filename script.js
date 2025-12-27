const workouts = [
    {
        id: 1, name: "Bench Press", category: "Chest", image: "images/bench press image.png"
    },
    {
        id: 2, name: "Incline Bench Press", category: "Chest", image: "images/incline bench press image.png"
    },
    {
        id: 3, name: "Decline Bench Press", category: "Chest", image: "images/decline bench press.png"
    },
    {
        id: 4, name: "chest Fly Machine", category: "Chest", image: "images/chest fly machine.png"
    },
    {
        id: 5, name: "Push Ups", category: "Chest", image: "images/push ups.png"
    },
    {
        id: 6, name: "Lat Pulldown", category: "Back", image: "images/lat pulldown.png"
    },
    {
        id: 7, name: "Seated Cable Row", category: "Back", image: "images/seated cable row.png"
    },
    {
        id: 8, name: "T-Bar Row", category: "Back", image: "images/t bar row.png"
    },
    {
        id: 9, name: "Back Extension", category: "Back", image: "images/back extension.png"
    },
    {
        id: 10, name: "Pull Ups", category: "Back", image: "images/pull ups.png"
    },
    {
        id: 11, name: "Shoulder Press", category: "Shoulders", image: "images/shoulder press.png"
    },
    {
        id: 12, name: "Lateral Raises", category: "Shoulders", image: "images/lateral raise.png"
    },
    {
        id: 13, name: "Rear Delt Fly", category: "Shoulders", image: "images/rear delt fly.png"
    },
    {
        id: 14, name: "Shrugs", category: "Shoulders", image: "images/shrugs.png"
    },
    {
        id: 15, name: "Reverse Katana Extension", category: "Shoulders", image: "images/reverse katana extension.png"
    },
    {
        id: 16, name: "Dumbbell Curl", category: "Biceps", image: "images/dumbbell curl.png"
    },
    {
        id: 17, name: "Preacher Curl", category: "Biceps", image: "images/preacher curl.png"
    },
    {
        id: 18, name: "Hammer Curl", category: "Biceps", image: "images/hammer curl.png"
    },
    {
        id: 19, name: "Triceps Pushdown", category: "Triceps", image: "images/triceps pushdown.png"
    },
    {
        id: 20, name: "Triceps Extension", category: "Triceps", image: "images/triceps extension.png"
    },
    {
        id: 21, name: "Skullcrusher", category: "Triceps", image: "images/skullcrusher.png"
    },
    {
        id: 22, name: "Leg Press", category: "Legs", image: "images/leg press.png"
    },
    {
        id: 23, name: "squat", category: "Legs", image: "images/squat.png"
    },
    {
        id: 24, name: "Seated Leg Curl", category: "Legs", image: "images/seated leg curl.png"
    },
    {
        id: 25, name: "Leg Extension", category: "Legs", image: "images/seated leg extension.png"
    },
    {
        id: 26, name: "Calf Raise", category: "Legs", image: "images/calf raise.png"
    },
    {
        id: 27, name: "Running", category: "Cardio", image: "images/treadmill.png"
    },
    {
        id: 28, name: "Stair Master", category: "Cardio", image: "images/stair master.png"
    },
    {
        id: 29, name: "Rowing Machine", category: "Cardio", image: "images/rowing machine.png"
    },
    {
        id: 30, name: "Battle Ropes", category: "Cardio", image: "images/battle ropes.png"
    }
];
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

        container.appendChild(card);
    });
}
