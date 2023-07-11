function openTab(event, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Получаем все элементы класса "tabcontent" и прячем их
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Получаем все элементы класса "tablinks" и убираем класс "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
   
   
}

     // Get the element with id="defaultOpen" and click on it
     document.getElementById("defaultOpen").click();

var timerCounter=0,counter=0, currentImage=0, pWin=0, fBtn1=0, fBtn2=0, fBtn3=0, fBtn4=0, fBtn5=0, fBtn6=0, fBtn7=0, fBtn8=0, fBtn9=0,lol=0;
let timer_start = true;   
let p1Name = document.getElementById('p1Input').value;
let p2Name = document.getElementById('p2Input').value;
// Функция, которая будет вызываться при нажатии на кнопку
function changeState(event) {

  
    
   
    buttonID = event.currentTarget.id;
   // event.currentTarget.style.backgroundImage = 'url("krestik.jpg")';

    if (event.currentTarget.style.backgroundImage == 0 && counter%2==0) {
        event.currentTarget.style.backgroundImage = 'url("krestik.png")';

        document.getElementById('spanPlayerName').innerHTML = p2Name;
        document.getElementById('currentSign').src = 'nolik1.png';

        counter += 1;
        
       

        
      
        
        switch (buttonID) {
            case 'fBtn1':
              fBtn1 = 'krestik'
              break;
            case 'fBtn2':
              fBtn2 = 'krestik'
              break;
            case 'fBtn3':
              fBtn3 = 'krestik'
              break;
            case 'fBtn4':
              fBtn4 = 'krestik'
              break;
            case 'fBtn5':
              fBtn5 = 'krestik'
              break;
            case 'fBtn6':
              fBtn6 = 'krestik'
              break;
            case 'fBtn7':
              fBtn7 = 'krestik'
              break;
            case 'fBtn8':
              fBtn8 = 'krestik'
              break;
            case 'fBtn9':
              fBtn9 = 'krestik'
            break;
          }
    }

    else if (event.currentTarget.style.backgroundImage == 0 && counter%2==1) {
        event.currentTarget.style.backgroundImage = 'url("nolik.png")';

        document.getElementById('spanPlayerName').innerHTML = p1Name;
        document.getElementById('currentSign').src = 'krestik1.png';  

        counter += 1;
       

        switch (buttonID) {
            case 'fBtn1':
              fBtn1 = 'nolik'
              break;
            case 'fBtn2':
              fBtn2 = 'nolik'
              break;
            case 'fBtn3':
              fBtn3 = 'nolik'
              break;
            case 'fBtn4':
              fBtn4 = 'nolik'
              break;
            case 'fBtn5':
              fBtn5 = 'nolik'
              break;
            case 'fBtn6':
              fBtn6 = 'nolik'
              break;
            case 'fBtn7':
              fBtn7 = 'nolik'
              break;
            case 'fBtn8':
              fBtn8 = 'nolik'
              break;
            case 'fBtn9':
              fBtn9 = 'nolik'
            break;
          }
    }


}

function start() {
    startTimer();
    document.getElementById('Field').style.pointerEvents = 'auto';
    document.getElementById('startMenu').style.display = 'none';
    document.getElementById('currentStep').style.visibility = 'visible';
    p1Name = document.getElementById('p1Input').value;
    p2Name = document.getElementById('p2Input').value;
    document.getElementById('spanPlayerName').innerHTML = p1Name;
    document.getElementById('currentPlayer1').innerHTML = p1Name;
    document.getElementById('currentPlayer2').innerHTML = p2Name;
    document.getElementById('currentPlayers').style.visibility = 'visible';
    // document.getElementById('spanPlayerName').innerHTML = p1Name;
    // document.getElementById('currentSign').src = 'krestik1.png';

    // document.getElementById('spanPlayerName').innerHTML = p2Name;
    // document.getElementById('currentSign').src = 'nolik1.png';
}

let countdownInterval; // Глобальная переменная для хранения ссылки на текущий таймер
let minutes = 0;
let seconds = 0;

function startTimer() {
  clearInterval(countdownInterval); // Остановка предыдущего таймера, если он уже запущен
  

  const timerElement = document.getElementById('timer'); // Получение ссылки на элемент с идентификатором 'timer'
  timerElement.textContent = '00:00'; // Устанавливаем исходное значение таймера в элементе

  countdownInterval = setInterval(() => { // Создание интервала с функцией обратного вызова
    if(pWin==0)
    {seconds++;
    }     
    if (seconds === 60) { // Если достигнуто значение 60 секунд
      seconds = 0;
      minutes++;
    }

    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`; // Форматируем время в формате MM:SS
    timerElement.textContent = formattedTime; // Обновляем текст элемента 'timer' с отформатированным временем

    if (pWin!=0) { 
      clearInterval(countdownInterval); // Останавливаем таймер, очищая интервал
      
    }
  }, 1000); // Интервал обновления каждую секунду (1000 миллисекунд)
}


function info()
{
    alert(`${fBtn1} ${fBtn2} ${fBtn3} ${fBtn4} ${fBtn5} ${fBtn6} ${fBtn7} ${fBtn8} ${fBtn9}`);
}


let proverka = setInterval(function() {
    let winningCondition = '';
    const fieldBtns = document.getElementsByClassName('fieldBtn'); // Получение коллекции элементов с классом 'fieldBtn'
    if (fBtn1 === 'krestik' && fBtn2 === 'krestik' && fBtn3 === 'krestik') {
      clearInterval(proverka);
      winningCondition = 'fBtn1 - fBtn2 - fBtn3';
      pWin=1;
      document.getElementById('fBtn1').style.backgroundColor= '#cfede6';
      document.getElementById('fBtn2').style.backgroundColor= '#cfede6';
      document.getElementById('fBtn3').style.backgroundColor= '#cfede6';
    } else if (fBtn4 === 'krestik' && fBtn5 === 'krestik' && fBtn6 === 'krestik') {
        clearInterval(proverka);
        winningCondition = 'fBtn4 - fBtn5 - fBtn6';
        pWin = 1;
        document.getElementById('fBtn4').style.backgroundColor = '#cfede6';
        document.getElementById('fBtn5').style.backgroundColor = '#cfede6';
        document.getElementById('fBtn6').style.backgroundColor = '#cfede6';
      } else if (fBtn7 === 'krestik' && fBtn8 === 'krestik' && fBtn9 === 'krestik') {
        clearInterval(proverka);
        winningCondition = 'fBtn7 - fBtn8 - fBtn9';
        pWin = 1;
        document.getElementById('fBtn7').style.backgroundColor = '#cfede6';
        document.getElementById('fBtn8').style.backgroundColor = '#cfede6';
        document.getElementById('fBtn9').style.backgroundColor = '#cfede6';
      } else if (fBtn1 === 'krestik' && fBtn4 === 'krestik' && fBtn7 === 'krestik') {
        clearInterval(proverka);
        winningCondition = 'fBtn1 - fBtn4 - fBtn7';
        pWin = 1;
        document.getElementById('fBtn1').style.backgroundColor = '#cfede6';
        document.getElementById('fBtn4').style.backgroundColor = '#cfede6';
        document.getElementById('fBtn7').style.backgroundColor = '#cfede6';
      } else if (fBtn2 === 'krestik' && fBtn5 === 'krestik' && fBtn8 === 'krestik') {
        clearInterval(proverka);
        winningCondition = 'fBtn2 - fBtn5 - fBtn8';
        pWin = 1;
        document.getElementById('fBtn2').style.backgroundColor = '#cfede6';
        document.getElementById('fBtn5').style.backgroundColor = '#cfede6';
        document.getElementById('fBtn8').style.backgroundColor = '#cfede6';
      } else if (fBtn3 === 'krestik' && fBtn6 === 'krestik' && fBtn9 === 'krestik') {
        clearInterval(proverka);
        winningCondition = 'fBtn3 - fBtn6 - fBtn9';
        pWin = 1;
        document.getElementById('fBtn3').style.backgroundColor = '#cfede6';
        document.getElementById('fBtn6').style.backgroundColor = '#cfede6';
        document.getElementById('fBtn9').style.backgroundColor = '#cfede6';
      } else if (fBtn1 === 'krestik' && fBtn5 === 'krestik' && fBtn9 === 'krestik') {
        clearInterval(proverka);
        winningCondition = 'fBtn1 - fBtn5 - fBtn9';
        pWin = 1;
        document.getElementById('fBtn1').style.backgroundColor = '#cfede6';
        document.getElementById('fBtn5').style.backgroundColor = '#cfede6';
        document.getElementById('fBtn9').style.backgroundColor = '#cfede6';
      } else if (fBtn7 === 'krestik' && fBtn5 === 'krestik' && fBtn3 === 'krestik') {
        clearInterval(proverka);
        winningCondition = 'fBtn7 - fBtn5 - fBtn3';
        pWin = 1;
        document.getElementById('fBtn7').style.backgroundColor = '#cfede6';
        document.getElementById('fBtn5').style.backgroundColor = '#cfede6';
        document.getElementById('fBtn3').style.backgroundColor = '#cfede6';
      }
        else if (fBtn1 === 'nolik' && fBtn2 === 'nolik' && fBtn3 === 'nolik') {
        clearInterval(proverka);
        winningCondition = 'fBtn1 - fBtn2 - fBtn3';
        pWin=2;
        document.getElementById('fBtn1').style.backgroundColor= '#f3bbcf';
        document.getElementById('fBtn2').style.backgroundColor= '#f3bbcf';
        document.getElementById('fBtn3').style.backgroundColor= '#f3bbcf';
      } else if (fBtn4 === 'nolik' && fBtn5 === 'nolik' && fBtn6 === 'nolik') {
        clearInterval(proverka);  
        winningCondition = 'fBtn4 - fBtn5 - fBtn6';
        pWin = 2;
        document.getElementById('fBtn4').style.backgroundColor = '#f3bbcf';
        document.getElementById('fBtn5').style.backgroundColor = '#f3bbcf';
        document.getElementById('fBtn6').style.backgroundColor = '#f3bbcf';
        } else if (fBtn7 === 'nolik' && fBtn8 === 'nolik' && fBtn9 === 'nolik') {
        clearInterval(proverka);
        winningCondition = 'fBtn7 - fBtn8 - fBtn9';
        pWin = 2;
        document.getElementById('fBtn7').style.backgroundColor = '#f3bbcf';
        document.getElementById('fBtn8').style.backgroundColor = '#f3bbcf';
        document.getElementById('fBtn9').style.backgroundColor = '#f3bbcf';
        } else if (fBtn1 === 'nolik' && fBtn4 === 'nolik' && fBtn7 === 'nolik') {
        clearInterval(proverka);
        winningCondition = 'fBtn1 - fBtn4 - fBtn7';
        pWin = 2;
        document.getElementById('fBtn1').style.backgroundColor = '#f3bbcf';
        document.getElementById('fBtn4').style.backgroundColor = '#f3bbcf';
        document.getElementById('fBtn7').style.backgroundColor = '#f3bbcf';
        } else if (fBtn2 === 'nolik' && fBtn5 === 'nolik' && fBtn8 === 'nolik') {
        clearInterval(proverka);
        winningCondition = 'fBtn2 - fBtn5 - fBtn8';
        pWin = 2;
        document.getElementById('fBtn2').style.backgroundColor = '#f3bbcf';
        document.getElementById('fBtn5').style.backgroundColor = '#f3bbcf';
        document.getElementById('fBtn8').style.backgroundColor = '#f3bbcf';
        } else if (fBtn3 === 'nolik' && fBtn6 === 'nolik' && fBtn9 === 'nolik') {
        clearInterval(proverka);
        winningCondition = 'fBtn3 - fBtn6 - fBtn9';
        pWin = 2;
        document.getElementById('fBtn3').style.backgroundColor = '#f3bbcf';
        document.getElementById('fBtn6').style.backgroundColor = '#f3bbcf';
        document.getElementById('fBtn9').style.backgroundColor = '#f3bbcf';
        } else if (fBtn1 === 'nolik' && fBtn5 === 'nolik' && fBtn9 === 'nolik') {
        clearInterval(proverka);
        winningCondition = 'fBtn1 - fBtn5 - fBtn9';
        pWin = 2;
        document.getElementById('fBtn1').style.backgroundColor = '#f3bbcf';
        document.getElementById('fBtn5').style.backgroundColor = '#f3bbcf';
        document.getElementById('fBtn9').style.backgroundColor = '#f3bbcf';
        } else if (fBtn7 === 'nolik' && fBtn5 === 'nolik' && fBtn3 === 'nolik') {
        clearInterval(proverka);
        winningCondition = 'fBtn7 - fBtn5 - fBtn3';
        pWin = 2;
        document.getElementById('fBtn7').style.backgroundColor = '#f3bbcf';
        document.getElementById('fBtn5').style.backgroundColor = '#f3bbcf';
        document.getElementById('fBtn3').style.backgroundColor = '#f3bbcf';
        }
       
        if (pWin == 1) {
         // alert(`Победил ${p1Name}. Условие: ${winningCondition}`);
         
         for (let i = 0; i < fieldBtns.length; i++) {
           fieldBtns[i].style.pointerEvents = 'none';; // Установка значения 'hidden' для параметра visibility элемента
         }
          document.getElementById('currentStep').style.visibility = 'hidden';
          document.getElementById('currentPlayers').style.visibility = 'hidden';
          document.getElementById('winMenu').style.visibility = 'visible';
          document.getElementById('winMenuText').innerHTML =  p1Name + ' победил!' ;
          document.getElementById('winMenu').style.visibility = 'visible';
          }
        else if (pWin == 2) {
          //alert(`Победил ${p2Name}. Условие: ${winningCondition}`);
          for (let i = 0; i < fieldBtns.length; i++) {
            fieldBtns[i].style.pointerEvents = 'none';; // Установка значения 'hidden' для параметра visibility элемента
          }
          document.getElementById('currentStep').style.visibility = 'hidden';
          document.getElementById('currentPlayers').style.visibility = 'hidden';
          document.getElementById('winMenuText').innerHTML =  p2Name + ' победил!' ;
          document.getElementById('winMenu').style.visibility = 'visible';
        }
        else if (fBtn1!=0 && fBtn2!=0 && fBtn3!=0 && fBtn4!=0 && fBtn5!=0 && fBtn6!=0 && fBtn7!=0 && fBtn8!=0 && fBtn9!=0 && pWin==0)
        {
          //  alert('Ничья!');
            clearInterval(proverka);
            clearInterval(countdownInterval);
            for (let i = 0; i < fieldBtns.length; i++) {
                fieldBtns[i].style.pointerEvents = 'none';; // Установка значения 'hidden' для параметра visibility элемента
              }
            document.getElementById('currentStep').style.visibility = 'hidden';
            document.getElementById('currentPlayers').style.visibility = 'hidden';
            document.getElementById('winMenuText').innerHTML = 'Ничья!' ;
            document.getElementById('winMenu').style.visibility = 'visible';
        }
        
  }, 200);
  function toMenu() {
  //  document.getElementById('winMenu').style.visibility = 'hidden';
    location.reload();
  }
  
while(true) {
     document.getElementById(tabW).style.width = document.documentElement.clientWidth; // коррекция ширины шапки в зависимости от ширины окна
 }

