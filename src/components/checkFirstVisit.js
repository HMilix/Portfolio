export const checkFirstVisit = () => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
        localStorage.setItem("hasVisited", "true");
        return true;
    }
    return false;
};