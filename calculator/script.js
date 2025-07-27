var dis = document.getElementById('display');

let appendToDisplay = (value) => {
    dis.value += value;
};

let clearvalue = () => {
    dis.value = "";
};

let calculate = () => {
    try {
        dis.value = eval(dis.value);
    } catch (error) {
        dis.value = "Error";
    }
};
