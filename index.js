// Render
// mô phỏng cơ sở dữ liệu
let employeeDataBase = [
    {
        id:1,
        fullname:"Văn A",
        dod:"28/12/1212",
        email:"z@gmail.com",
        address:"ádasd",
        status: true,
    },
    {
        id:2,
        fullname:"Văn E",
        dod:"28/12/1212",
        email:"z@gmail.com",
        address:"ádasd",
        status: true,
    },
    {
        id:3,
        fullname:"Văn B",
        dod:"28/12/1212",
        email:"z@gmail.com",
        address:"ádasd",
        status: true,
    },
    {
        id:4,
        fullname:"Văn C",
        dod:"28/12/1212",
        email:"z@gmail.com",
        address:"ádasd",
        status: false,
    },
    {
        id:5,
        fullname:"Văn D",
        dod:"28/12/1212",
        email:"z@gmail.com",
        address:"ádasd",
        status: false,
    },
];
// get HTML element

let tbody = document.getElementById("tbody");
let addBtn = document.getElementById("add-btn");
let addForm = document.getElementById("add-form");
let addFormCloseBtn = document.querySelector("#add-form .fa-xmark");
let mainAddForm = document.querySelector("#add-form form");

// render
function render(){
    tbody.innerHTML = "";
    for(let index in employeeDataBase){
        let status = "";
        if(employeeDataBase[index].status === true){
            status = `<div class="status status-active"></div>
                      <span> Đang hoạt động</span>
                     `;
        }else{
            status = `<div class="status status-stop"></div>
                      <span> Ngừng hoạt động</span>
                     `;
        }
    
    // for(let index in employeeDataBase){
    //     employeeDataBase[index] //{},{}
        let tr = `<tr>
                  <td>${+index + 1 }</td>
                  <td>${employeeDataBase[index].fullname}</td>
                  <td>${employeeDataBase[index].dod}</td>
                  <td>${employeeDataBase[index].email}</td>
                  <td>${employeeDataBase[index].address}</td>
                  <td>
                    <div style="display: flex; align-items: center; gap: 8px">
                    ${status}
                    </div>
                  </td>
                  <td>
                    <span class="button button-block">Chặn</span>
                  </td>
                  <td>
                    <span class="button button-edit">Sửa</span>
                  </td>
                  <td><span class="button button-delete">Xóa</span></td>   
                </tr>`;
        tbody.innerHTML = tbody.innerHTML + tr; 
    }
}
render()



// addbtn event
// dùng để mở form thêm mới hiện thị lên
addBtn.onclick = function(){
    addForm.classList.remove("add-form");
};
addFormCloseBtn.onclick = function(){
    addForm.classList.add("add-form");
};
// sự kiện thêm mới nhân viên
mainAddForm.onsubmit = function(event){
    event.preventDefault();
    //tạo ra nhân viên và thêm vào CSDL
    // console.log(mainAddForm.fullname.value); //<input  name = "fullname" />
    // onsole.log(mainAddForm.dob.value); 
    // onsole.log(mainAddForm.email.value); 
    // onsole.log(mainAddForm.address.value); 
    let employee = {
        id: Math.random(),
        fullname: mainAddForm.fullname.value,
        dob: mainAddForm.dob.value,
        email: mainAddForm.email.value,
        address: mainAddForm.address.value,
        status: true,
    };
    // thêm mới đối tượng dữ liệu vừa tạo ra từ input
    // vào trong DB
    employeeDataBase.push(employee);
    //phản ánh sự thay đổi của CSDL
    render();
};