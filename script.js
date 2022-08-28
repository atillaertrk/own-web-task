// GÖREV LİSTESİ
let gorevlist = [{ id: 3, gorevAdi: "Görev 1", status: "pending" }];
let inputgorev = document.querySelector("#taskinput");
let editId;
let isEditTask = false;
let eleman;
// GELECEK GÖREV
let gelecek_gorevlist = [
  { id: 2, gorevAdi: "Ertelenen Görev", status: "pending" },
];
let tamamlanmis_gorevlist = [
  { id: 1, gorevAdi: "Tamamlanan Görev", status: "complated" },
];
//GÖREV FONKSİYONU
function displayTask() {
  ul = document.getElementById("task");
  ul.innerHTML = "";
  if (gorevlist.length == 0) {
    ul.innerHTML =
      "<p class='mt-1 text-center text-danger'>Yapılacaklar Listesi Boş Görünüyor</p> ";
  } else {
    for (gorev of gorevlist) {
      let complated = gorev.status == "complated" ? "checked" : "";

      let li = `
      <li class="list-group-item px-4">
        <input class="form-check-input" ${complated} onclick="updateStatus(this)" type="checkbox" name="checkbox" value="" id="${gorev.id}"  />
        <label class="form-check-label ${complated}" for="${gorev.id}">${gorev.gorevAdi}</label>
        <div class="dropdown float-end">
          <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa-solid fa-ellipsis-vertical"></i>
          </button>
            <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
              <li><a onclick="goreviSil(${gorev.id})" class="dropdown-item" href="#"><i class="fa-solid fa-trash-can"></i> Sil</a></li>
              <li><a onclick='editTask(${gorev.id}, "${gorev.gorevAdi}")' class="dropdown-item" href="#"><i class="fa-solid fa-pen-to-square"></i> Düzenle</a></li>
              <li><a onclick="tasi(${gorev.id}) "class="dropdown-item" href="#"><i class="fa-solid fa-business-time"></i> Ertele</a></li>
            </ul>
          </div>
     </li>
    `;
      ul.insertAdjacentHTML("beforeend", li);
    }
  }
}
//GELECEK GÖREV FONKSİYONU
function futureTask() {
  ul2 = document.getElementById("task2");
  ul2.innerHTML = "";
  if (gelecek_gorevlist.length == 0) {
    ul2.innerHTML =
      "<p class='mt-1 text-center text-danger'>Ertelenen Görev Yok</p>";
  } else {
    for (gorev of gelecek_gorevlist) {
      let li2 = `
    <li class="list-group-item px-4">
      <input class="form-check-input" onclick="updateStatus2(this)" name="checkbox" type="checkbox" value="" id="${gorev.id}" />
      <label class="form-check-label" for="${gorev.id}">${gorev.gorevAdi}</label>
      <div class="dropdown float-end">
        <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        <i class="fa-solid fa-ellipsis-vertical"></i>
        </button>
          <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
            <li><a onclick="gelecekGoreviSil(${gorev.id})" class="dropdown-item" href="#"><i class="fa-solid fa-trash-can"></i> Sil</a></li>
            <li><a onclick="tekrarTasi(${gorev.id}) "class="dropdown-item" href="#"><i class="fa-solid fa-business-time"></i>Yapılacaklara Gönder</a></li>
            
            
          </ul>
        </div>
   </li>
    `;
      ul2.insertAdjacentHTML("beforeend", li2);
    }
  }
}
//TAMAMLANMIŞ GÖREV FONKSİYONU
function tamamTask() {
  ul3 = document.getElementById("task3");
  ul3.innerHTML = "";

  if (tamamlanmis_gorevlist.length == 0) {
    ul3.innerHTML =
      "<p class='mt-1 text-center text-danger'>Tamamlanan Görev Yok</p>";
  } else {
    for (gorev of tamamlanmis_gorevlist) {
      let li3 = `
      <li class="list-group-item px-4">
        <input class="form-check-input" name="checkbox" type="checkbox" value="" id="${gorev.id}" checked/>
        <label class="form-check-label" for="${gorev.id}">${gorev.gorevAdi}</label>
        <div class="dropdown float-end">
          <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa-solid fa-ellipsis-vertical"></i>
          </button>
            <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
              <li><a onclick="tamamGoreviSil(${gorev.id})" class="dropdown-item" href="#"><i class="fa-solid fa-trash-can"></i> Sil</a></li>
              <li><a onclick="tekrarTasiTamam(${gorev.id}) "class="dropdown-item" href="#"><i class="fa-solid fa-business-time"></i>Yapılacaklara Gönder</a></li>
          </ul>
        </div>
      </li>
    `;
      ul3.insertAdjacentHTML("beforeend", li3);
    }
  }
}
function goreviSil(id) {
  let deleteid;
  for (index in gorevlist) {
    if (gorevlist[index].id == id) {
      deleteid = index;
    }
  }
  gorevlist.splice(deleteid, 1);
  displayTask();
}
//GELECEK GÖREV SİLME FONKSİYONU
function gelecekGoreviSil(id) {
  let deletegelID;
  for (index in gelecek_gorevlist) {
    if (gelecek_gorevlist[index].id == id) {
      deletegelID = index;
    }
  }
  gelecek_gorevlist.splice(deletegelID, 1);
  futureTask();
  displayTask();
}
//TAMAMLANAN GÖREV SİLME FONKSİYONU
function tamamGoreviSil(id) {
  let deleteid;
  for (index in tamamlanmis_gorevlist) {
    if (tamamlanmis_gorevlist[index].id == id) {
      deleteid = index;
    }
  }
  tamamlanmis_gorevlist.splice(deleteid, 1);
  tamamTask();
}

//ÇALIŞTIRILACAK FONKSİYONLAR
displayTask();
futureTask();
tamamTask();

// ---------BUTONLAR-----------
function tasi(id) {
  let tasiid;
  let tasinacak;
  for (index in gorevlist) {
    if (gorevlist[index].id == id) {
      tasiid = index;
    }
  }
  tasinacak = gorevlist.splice(tasiid, 1);

  gelecek_gorevlist.push(tasinacak[0], tasinacak[1]);
  gelecek_gorevlist.pop();

  displayTask();
  futureTask();
}
function tekrarTasi(id) {
  let tasiid;
  let tasinacak;
  for (index in gelecek_gorevlist) {
    if (gelecek_gorevlist[index].id == id) {
      tasiid = index;
    }
    tasinacak = gelecek_gorevlist.splice(tasiid, 1);
    gorevlist.push(tasinacak[0], tasinacak[1]);
    gorevlist.pop();
    displayTask();
    futureTask();
  }
}
function tekrarTasiTamam(id) {
  let tasiid;
  let tasinacak;
  for (index in tamamlanmis_gorevlist) {
    if (tamamlanmis_gorevlist[index].id == id) {
      tasiid = index;
    }
    tasinacak = tamamlanmis_gorevlist.splice(tasiid, 1);
    gorevlist.push(tasinacak[0], tasinacak[1]);
    gorevlist.pop();
    displayTask();
    futureTask();
    tamamTask();
  }
}
//GÖREV EKLEME BUTONU
let btnekle = document
  .querySelector("#taskbtn")
  .addEventListener("click", function (event2) {
    if (inputgorev.value == "") {
      document.getElementById("uyari").classList.remove("d-none");
    } else {
      if (!isEditTask) {
        //ekleme
        document.getElementById("uyari").classList.add("d-none");
        gorevlist.push({
          id: gorevlist.length + 3,
          gorevAdi: inputgorev.value,
          status: "pending",
        });
      } else {
        //güncelleme
        for (let gorev of gorevlist) {
          if (gorev.id == editId) {
            gorev.gorevAdi = inputgorev.value;
          }
          isEditTask = false;
        }
      }

      inputgorev.value = "";
      displayTask();
      futureTask();
    }

    event2.preventDefault();
  });

//DÜZENLE FONSKSİYONU
function editTask(taskId, taskName) {
  editId = taskId;
  isEditTask = true;
  inputgorev.value = taskName;
  inputgorev.focus();
  inputgorev.classList.add("active");
}
//GÖREV UYARI - TÜMÜNÜ TEMİZLE BUTONU

let btntemizle = document
  .querySelector("#btn-clear")
  .addEventListener("click", function (event) {
    if (gorevlist.length == 0) {
      alert("Temizlenecek Görev Yok");
    } else {
      gorevlist.splice(0, gorevlist.length);
      displayTask();
    }
    event.preventDefault();
  });
let btntemizle2 = document
  .querySelector("#btn-clear2")
  .addEventListener("click", function (event) {
    if (gelecek_gorevlist.length == 0) {
      alert("Ertelenen Görev Zaten Yok");
    } else {
      gelecek_gorevlist.splice(0, gelecek_gorevlist.length);
      displayTask();
      futureTask();
    }
    event.preventDefault();
  });

let btntemizle3 = document
  .querySelector("#btn-clear3")
  .addEventListener("click", function (event) {
    if (tamamlanmis_gorevlist.length == 0) {
      alert("Ertelenen Görev Zaten Yok");
    } else {
      tamamlanmis_gorevlist.splice(0, tamamlanmis_gorevlist.length);
      displayTask();
      futureTask();
      tamamTask();
    }
    event.preventDefault();
  });
//TAMAMLANMIŞ GÖREV
function updateStatus(selectedTask) {
  let selected = selectedTask.nextElementSibling;
  let durum;
  if (selectedTask.checked) {
    selected.classList.add("checked");
    durum = "complated";
  } else {
    selected.classList.remove("checked");
    durum = "pending";
  }
  for (gorev of gorevlist) {
    if (gorev.id == selectedTask.id) {
      gorev.status = durum;
      for (i in gorevlist) {
        if (gorevlist[i]["status"] == "complated") {
          let tasi = gorevlist.splice(i, 1);

          tamamlanmis_gorevlist.push(tasi[0]);
          console.log(tamamlanmis_gorevlist);
        }
      }
      displayTask();
      tamamTask();
    }
  }
}
//ERTELENEN GÖREVİ TAMAMLAMA

function updateStatus2(selectedTask) {
  let selected = selectedTask.nextElementSibling;
  let durum;
  if (selectedTask.checked) {
    selected.classList.add("checked");
    durum = "complated";
  } else {
    selected.classList.remove("checked");
    durum = "pending";
  }
  for (gorev of gelecek_gorevlist) {
    if (gorev.id == selectedTask.id) {
      gorev.status = durum;
      for (i in gelecek_gorevlist) {
        if (gelecek_gorevlist[i]["status"] == "complated") {
          let tasi = gelecek_gorevlist.splice(i, 1);

          tamamlanmis_gorevlist.push(tasi[0]);
        }
      }
      displayTask();
      futureTask();
      tamamTask();
    }
  }
}
