$(document).ready(function () {
    let addButton = $('.add-button');
    let tasks = $('.tasks');
    let txf = $('.add-field');

    //Add element
    addButton.on('click', function () {
        // let txf = $('.add-field');
        console.log("hooo");
        let elem = `<li class="task">
                        <div class="task-cbx col-1">
                            <input type="checkbox">
                        </div>
                        <div class="task-text col-2">${txf.val()}</div>
                        <div class="task-remove col-3"></div>
                    </li>`

        tasks.append(elem);
        txf.val('');
    });

    let test = $('.add-field');
    test.on('keypress', function (e) {
        var key = e.which;
        console.log(e);
        if (key == 13)  // the enter key code
        {
            let elem = `<li class="task">
                        <div class="task-cbx col-1">
                            <input type="checkbox">
                        </div>
                        <div class="task-text col-2">${txf.val()}</div>
                        <div class="task-remove col-3"></div>
                    </li>`

            tasks.append(elem);
            txf.val('');
        }
    })



    //Remove element

    // Cách này không xóa được element tự thêm vì khi document load ready thì chưa load được element đó
    // let removeButton = $('.task-remove');
    // removeButton.on('click', function() {
    //     let parent = $(this).parent();
    //     parent.remove();
    // });

    // bắt sự kiện từ thằng cha vào thằng con
    // khi thêm element thì document chưa load đc nhưng thằng cha đã load được rồi
    tasks.on('click', '.task-remove', function () {
        $(this).parent().remove();
    });

    // line through
    tasks.on('click', '.task-cbx input', function () {
        $(this).parent().next().toggleClass('checked');
    });

    // task sortable
    $('#tasks-sortable').sortable();

});
