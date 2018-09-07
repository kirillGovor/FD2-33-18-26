function  records(){
    var records = new function () {
        var StringName='GOVOR_TEST_INFO';
        var password; 
        var AjaxHandlerScript = "https://fe.it-academy.by/AjaxStringStorage2.php";
        var recordsLength = 10;
    
        var userName= document.getElementById("Nick");
        
        var score =hash.score;
         var recordStorage;
    
    // функция проверяет, наблал ли игрок достаточно очков, чтобы попасть в таблицу рекордов,
    // и возвращает это значение, добавляет его в таблицу
       
    
        function UpdateStorage() {
            $.ajax({
                    url: AjaxHandlerScript,
                    type: 'POST',
                    data: {
                        f: 'UPDATE', n: StringName,
                        v: JSON.stringify(userName,score), p: password
                    },
                    cache: false,
                    success: UpdateReady,
                    error: ErrorHandler
                }
            );
        }
    
    
        function LoadStorage() {
            $.ajax({
                    url: AjaxHandlerScript,
                    type: 'POST',
                    data: {f: 'READ', n: StringName},
                    cache: false,
                    success: ReadReady,
                    error: ErrorHandler
                }
            );
        }
    
    // функция получает сообщения и показывает их в виде таблицы
        function ReadReady(ResultH) {
            if (ResultH.error != undefined)
                alert("Извините, таблицы рекордов временно недоступны.\n" + ResultH.error);
            else {
                recordStorage = tableFromString(ResultH.result);
                ShowTable();
            }
        }
    
    
    // вывод сообщения об ошибке при записи
        function UpdateReady(ResultH) {
            if (ResultH.error != undefined) {
                alert("Извините, таблицы рекордов временно недоступны.\n" + ResultH.error);
            } else {
                lePetitWorld.toggleSaveControls(false);
            }
        }
    
    //вывод сообщения об ошибке
        function ErrorHandler(jqXHR, StatusStr, ErrorStr) {
            alert("Извините, таблицы рекордов временно недоступны.\n" + StatusStr + ' ' + ErrorStr);
        }
    
    
    };


}