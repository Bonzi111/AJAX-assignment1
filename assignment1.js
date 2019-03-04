
$(document).ready(function()
{
    $.ajax({url: " https://jsonplaceholder.typicode.com/posts", success: function(data)
    {
        var arr_of_obj=data;
        function createTable() {
            let previousTable = document.getElementById('dynamicTable');
            if (!!previousTable) 
            {
                previousTable.remove();
            }
            var table = document.createElement('table');
            table.setAttribute('id', 'dynamicTable');
            var header = Object.keys(arr_of_obj[0]);
            var tr = document.createElement('tr');
            header.map((value) => {
                var th = document.createElement('th');
                th.innerHTML = value;
                th.setAttribute('class', 'tableClass1');
                th.setAttribute('id', value)
                tr.appendChild(th);
            })
            table.appendChild(tr);
            arr_of_obj.map((value)=>{
                var tr = document.createElement('tr');
                header.map((temp)=>{
                    var td = document.createElement('td');
                    td.innerHTML = value[temp];
                    td.setAttribute('class', 'tableClass');
                    tr.appendChild(td);
                })
            table.appendChild(tr);
            })
            document.body.appendChild(table);
            addEventsToColumns();
        }
        createTable();
        function addEventsToColumns() 
        {
            var header = Object.keys(arr_of_obj[0]);
            header.map((value) => 
            {
                document.getElementById(value).addEventListener('click', function (event) 
                {
                    console.log(event);
                    sortTable(event.target.innerText)
                })
            }) 
        }
        let flag = true;
        function sortTable(param) 
        {
            arr_of_obj.sort(compare);
            function compare(a, b) 
            {
                if (a[param] > b[param] && flag)
                    return 1;
                else
                    return -1;
            }
            flag = !flag;
            createTable();
        }
    }
    })

});