const data_array = [
    ["Which country borders England to the North?", "a) Ireland", "b) Scotland", "c) France", "d) Wales", 2],
    ["What is the capital of England?", "a) Cardiff", "b) Bristol", "c) London", "d) Leeds", 3],
    ["Which sea lies south of England?", "a) Baltic", "b) Cumbrian", "c) Celtic", "d) Mediterranean", 3],
    ["Who is the current (2020) ruling monarch in Britain?", "a) Charles", "b) Edward", "c) Victoria", "d) Elizabeth II", 4],
    ["Which river runs through the city of London?", "a) Avon", "b) Thames", "c) Esk", "d) Severn", 2],
    ["What body of water separates France from England?", "a) The British Strait", "b) The French Channel", "c) The Strait of Gibraltar", "d) The English Channel", 4],
    ["Which county is home to the famous Stonehenge?", "a) Cumberland", "b) Wiltshire", "c) Staffordshire", "d) Avon", 2],
    ["What kind of government does England have?", "a) Dictatorship", "b) Constitutional Monarchy", "c) Presidential Republic", "d) Military State", 2],
    ["How many seats are in the House of Commons?", "a) 482", "b) 651", "c) 674", "d) 295", 2],
    ["What is the upper house of the British Parliament called?", "a) The House of Commons", "b) The House of Lords", "c) The House That Jack Built", "d) The Senate", 2],
    ["Which tourist attraction has been open the longest? ", "a) Warwick Castle", "b) The Tower of London", "c) Mother Shipton's Cave", "d) Big Ben", 3],
    ["What are the Cotswolds?", "a) A forest", "b) A lake district", "c) An old volcano", "d) A region of rolling hills", 4],
    ["Which of these tourist attractions was built by the Romans?", "a) Durham Cathedral", "b) Windsor Castle", "c) Hadrian's Wall", "d) Stonehenge", 3],
    ["What is the approximate size of England?", "a) 130, 000 km2", "b) 320, 000 km2", "c) 430, 000 km2", "d) 250, 000 km2", 1],
    ["What is the standard currency in England?", "a) Pound", "b) Ruble", "c) Dollar", "d) Yen", 1],
    ["What kind of flower is on England's national floral emblem?", "a) Orchid", "b) Lily", "c) Rose", "d) Carnation", 3],
    ["Which of the following is not one of the tribes which originally colonized England?", "a) Angles", "b) Jutes", "c) Vikings", "d) Saxons", 3],
    ["As well as inventing grammatical rules, the English have also invented many phrases. Which of these is not an English phrase?", "a) Mind your p's and q's", "b) Good night, sleep tight", "c) The whole nine yards", "d) Rule of thumb", 3],
    ["What color are Buckingham Palace gates? ", "a) white", "b) silver", "c) gold", "d) bronze", 3],
    ["What famous column stands in the center of Trafalgar Square?", "a) Napoleon's Column", "b) Nelson's Column", "c) Christopher Columbus' Column", "d) St. George's Column", 2],
    ["What does St George's day fallon?", "a) . the 1st of April", "b) the 23rd of April", "c) the 25th of December", "d) the 23rd of May", 2],
    ["Which King was considered the patron saint of England before Edward III changed it to Saint George in 1348?", "a) King Arthur", "b) Alfred the Great", "c) Edmund the Magnificent", "d) Edward the Confessor", 3],
    ["What was Elizabeth I 's last name?", "a) Tudor", "b) Stewart", "c) York", "d) Seymour", 1],
    ["How should Yorkshire pudding be served correctly?", "a) As a course on it's own with gravy before the main meal", "b) Alongside the main meal", "c) As a dessert", "d) Just with meat", 1],
    ["Where in England are the \"Dreaming Spires\"?", "a) Cambridge", "b) Newcastle", "c) Oxford", "d) London", 3],
    ["What is England's national sport?", "a) cricket", "b) football", "c) rugby", "d) handball", 1],
    ["The M1 motorway connects London to which English city?", "a) Bristol", "b) Leeds", "c) Liverpool", "d) Birmingham", 2],
    ["Which city has been known as 'Britain's Detroit' and the 'City of Peace and Reconciliation'?", "a) Brighton", "b) Nottingham", "c) Manchester", "d) Coventry", 4],
    ["In 1811, nearly a quarter of all women in England had what name?", "a) Mary", "b) Jane", "c) Elisabeth", "d) Abigail", 1],
    ["Which city is known as the 'Seattle of England' because of its youth culture?", "a) Manchester", "b) Bristol", "c) London", "d) Liverpool", 2]
];

var cur_answer = getRandomInt(0,data_array.length);

document.getElementById('option1').innerHTML=data_array[cur_answer][1];
document.getElementById('option2').innerHTML=data_array[cur_answer][2];
document.getElementById('option3').innerHTML=data_array[cur_answer][3];
document.getElementById('option4').innerHTML=data_array[cur_answer][4];
document.getElementById('question').innerHTML=data_array[cur_answer][0];


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

var counter = 0;


function check(num){
    counter = counter+1;
    if((counter==1) && (num ==  data_array[cur_answer][5])){

        var str1 = sessionStorage.getItem("MapLevel");
        var str2 = sessionStorage.getItem("lvl");
        var str3 = sessionStorage.getItem("access");
        var number = 0;
        number =Number(sessionStorage.getItem("lvl")) + 1;
        // доступность к уровню

        if((sessionStorage.getItem('MapLevel') == null) || ((Number(str2)>=Number(str1[6])) && (Number(str3) == Number(str2)) )){
            sessionStorage.setItem("MapLevel","maplvl"+sessionStorage.getItem("lvl")+".jpg");
        } // меняет фотку

        if((sessionStorage.getItem('access') == null) || (Number(str2)==Number(str3))){
            sessionStorage.setItem("access",Number(sessionStorage.getItem("lvl")) + 1);
        }

        document.getElementById('option'+data_array[cur_answer][5]).style.color="green"; // делает ответ зеленым


    }else{
        if(counter==1){
            document.getElementById('option'+num).style.color='red';
            document.getElementById('option'+data_array[cur_answer][5]) .style.color="green";
        }
    }
}