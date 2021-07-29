function spinLogo(getStarted, event) {
    if (getStarted.contains(event.target)) {
        img.classList.add("spin");
    } else if (!getStarted.contains(event.target)) {
        img.classList.remove("spin");
    }
}