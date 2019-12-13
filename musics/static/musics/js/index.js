let table = $('#datatables').DataTable({
    "processing": true,
    "serverSide": true,
    "bDestroy": true,
    "fixedHeader": true,
    "dom": 'lBfrtip',
    "ajax": {
        "url": "api/list/",
        "type": "GET",
        "data":{'song':$('#song2').val(),
                'singer':$('#singer2').val()
                },
    },
    buttons: [{
        extend: 'collection',
        className: 'exportButton',
        text: 'Data Export',
        buttons: [
                    { 
                        extend:'csv',
                        text: 'Export CSV',
                        className: 'btn-sm btn-flat',
                        exportOptions: {
                                        "columns": [0,1,2,3,4],
                                        }
                    },
                    { 
                        extend:'copy',
                        text: 'Table Copy',
                        className: 'btn-sm btn-flat',
                        exportOptions: {
                                        "columns": [0,1,2,3,4],
                                        },
                    },
                    { 
                        extend:'excel',
                        text: 'Export Excel',
                        className: 'btn-sm btn-flat',
                        exportOptions: {
                                        "columns": [0,1,2,3,4],
                                        },
                    }
                ]
            },
            {
                extend:  'colvis',
                text: 'Column Select',
                className: 'exportButton',
            }
    ],
    "lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
    "language": {
        "emptyTable": "데이터 없음.",
        "lengthMenu": "페이지당 _MENU_ 개씩 보기",
        "info": "현재 _START_ - _END_ / _TOTAL_건",
        "infoEmpty": "0건",
        "infoFiltered": "( _MAX_건의 데이터에서 필터링 )",
        "search": "",
        "zeroRecords": "일치하는 데이터가 없음",
        "loadingRecords": "로딩중...",
        "processing":     "잠시만 기다려 주세요...",
        "paginate": {
            "next": "다음",
            "previous": "이전"
        }
    },
    
    "columns": [
        {"data": "id"},
        {"data": "song"},
        {"data": "singer"},
        {"data": "last_modify_date"},
        {"data": "created"},
        {"data": "place"},
        {
            "data": null,
            "defaultContent": '<button type="button" class="btn btn-info">Edit</button>' + '&nbsp;&nbsp' +
            '<button type="button" class="btn btn-danger">Delete</button>'
        }
    ],
    "columnDefs": [ {
        "targets": 5,
        "orderable": false
        } ]
})

table.buttons().container().appendTo($('#test1'));

$('#filter').click( function(e) {
    let table2 = $('#datatables').DataTable({
        "processing": true,
        "serverSide": true,
        "bDestroy": true,
        "lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
        "dom": 'lBfrtip',
        buttons: [{
            extend: 'collection',
            className: 'exportButton',
            text: 'Data Export',
            buttons: [
                        { 
                            extend:'csv',
                            text: 'Export CSV',
                            className: 'btn-sm btn-flat',
                            exportOptions: {
                                            "columns": [0,1,2,3,4],
                                            }
                        },
                        { 
                            extend:'copy',
                            text: 'Table Copy',
                            className: 'btn-sm btn-flat',
                            exportOptions: {
                                            "columns": [0,1,2,3,4],
                                            },
                        },
                        { 
                            extend:'excel',
                            text: 'Export Excel',
                            className: 'btn-sm btn-flat',
                            exportOptions: {
                                            "columns": [0,1,2,3,4],
                                            },
                        }
                    ]
                },
                {
                    extend:  'colvis',
                    text: 'Column Select',
                    className: 'exportButton',
                }
        ],

        "ajax": {
            "url": "api/list/",
            "type": "GET",
            "data":{'song':$('#song2').val(),
                    'singer':$('#singer2').val()
                    },
        },
        "language": {
            "emptyTable": "데이터 없음.",
            "lengthMenu": "페이지당 _MENU_ 개씩 보기",
            "info": "현재 _START_ - _END_ / _TOTAL_건",
            "infoEmpty": "0건",
            "infoFiltered": "( _MAX_건의 데이터에서 필터링 )",
            "search": "",
            "zeroRecords": "일치하는 데이터가 없음",
            "loadingRecords": "로딩중...",
            "processing":     "잠시만 기다려 주세요...",
            "paginate": {
                "next": "다음",
                "previous": "이전"
            }
        },
    
        "columns": [
            {"data": "id"},
            {"data": "song"},
            {"data": "singer"},
            {"data": "last_modify_date"},
            {"data": "created"},
            {
                "data": null,
                "defaultContent": '<button type="button" class="btn btn-info">Edit</button>' + '&nbsp;&nbsp' +
                '<button type="button" class="btn btn-danger">Delete</button>'
            }
        ] ,
        "columnDefs": [ {
            "targets": 5,
            "orderable": false
            } ]
        
    })
    table2.buttons().container().appendTo($('#test1'));
});

$('#refresh').click( function(e) {
    let table2 =$('#datatables').DataTable({
        "processing": true,
        "serverSide": true,
        "bDestroy": true,
        "lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
        "dom": 'lBfrtip',
        buttons: [{
            extend: 'collection',
            className: 'exportButton',
            text: 'Data Export',
            buttons: [
                        { 
                            extend:'csv',
                            text: 'Export CSV',
                            className: 'btn-sm btn-flat',
                            exportOptions: {
                                            "columns": [0,1,2,3,4],
                                            }
                        },
                        { 
                            extend:'copy',
                            text: 'Table Copy',
                            className: 'btn-sm btn-flat',
                            exportOptions: {
                                            "columns": [0,1,2,3,4],
                                            },
                        },
                        { 
                            extend:'excel',
                            text: 'Export Excel',
                            className: 'btn-sm btn-flat',
                            exportOptions: {
                                            "columns": [0,1,2,3,4],
                                            },
                        }
                    ]
                },
                {
                    extend:  'colvis',
                    text: 'Column Select',
                    className: 'exportButton',
                }
        ],

        "ajax": {
            "url": "api/list/",
            "type": "GET",
            "data":{'song':'',
                    'singer':''
                    },
        },
        "language": {
            "emptyTable": "데이터 없음.",
            "lengthMenu": "페이지당 _MENU_ 개씩 보기",
            "info": "현재 _START_ - _END_ / _TOTAL_건",
            "infoEmpty": "0건",
            "infoFiltered": "( _MAX_건의 데이터에서 필터링 )",
            "search": "",
            "zeroRecords": "일치하는 데이터가 없음",
            "loadingRecords": "로딩중...",
            "processing":     "잠시만 기다려 주세요...",
            "paginate": {
                "next": "다음",
                "previous": "이전"
            }
        },
    
        "columns": [
            {"data": "id"},
            {"data": "song"},
            {"data": "singer"},
            {"data": "last_modify_date"},
            {"data": "created"},
            {
                "data": null,
                "defaultContent": '<button type="button" class="btn btn-info">Edit</button>' + '&nbsp;&nbsp' +
                '<button type="button" class="btn btn-danger">Delete</button>'
            }
        ],
        "columnDefs": [ {
            "targets": 5,
            "orderable": false
            } ]
        
    })
    table2.buttons().container().appendTo($('#test1'));
});


let id = 0;

$('#datatables tbody').on('click', 'button', function () {
    let data = table.row($(this).parents('tr')).data();
    let class_name = $(this).attr('class');
    if (class_name == 'btn btn-info') {
        // EDIT button
        $('#song').val(data['song']);
        $('#singer').val(data['singer']);
        $('#place').val(data['place']);
        $('#type').val('edit');
        $('#modal_title').text('EDIT');
        $("#myModal").modal();
    } else {
        // DELETE button
        $('#modal_title').text('DELETE');
        $("#confirm").modal();
    }

    id = data['id'];

});

var $crf_token = $('[name="csrfmiddlewaretoken"]').attr('value');

$('form').on('submit', function (e) {
    e.preventDefault();
    let $this = $(this);
    let type = $('#type').val();
    let method = '';
    let url = 'api/list/';
    if (type == 'new') {
        // new
        method = 'POST';
        headers = {"X-CSRFToken": $crf_token};
    } else {
        // edit
        url = url + id + '/';
        method = 'PUT';
        headers = {"X-CSRFToken": $crf_token};
    }

    $.ajax({
        url: url,
        method: method,
        headers: headers,
        data: $this.serialize()
    }).success(function (data, textStatus, jqXHR) {
        location.reload();
    }).error(function (jqXHR, textStatus, errorThrown) {
        console.log(jqXHR)
    });
});



$('#confirm').on('click', '#delete', function (e) {
    $.ajax({
        url: 'api/list/' + id + '/',
        method: 'DELETE',
        headers:{"X-CSRFToken": $crf_token},
    }).success(function (data, textStatus, jqXHR) {
        location.reload();
    }).error(function (jqXHR, textStatus, errorThrown) {
        console.log(jqXHR)
    });
});


$('#new').on('click', function (e) {
    $('#song').val('');
    $('#singer').val('');
    $('#type').val('new');
    $('#modal_title').text('NEW');
    $("#myModal").modal();
});


