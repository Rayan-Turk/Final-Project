const workouts = [
    {
        id: 1, name: "Bench Press", category: "Chest", image: "/images/bench press image.png"
    },
    {
        id: 2, name: "Incline Bench Press", category: "Chest", image: "/images/incline bench press image.png"
    }
];
const container = document.getElementById("workoutContainer");
const template = document.getElementById("workoutTemplate");

template.remove();

workouts.forEach(workout => {
    const card = template.cloneNode(true);
    
    card.querySelector(".workout-name").textContent = workout.name;
    card.querySelector(".workout-category").textContent = workout.category;
    card.querySelector(".workout-image").src = workout.image;
    card.querySelector(".workout-image").alt = workout.name;

  container.appendChild(card);
});