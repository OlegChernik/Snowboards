
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  
/*1============================================================*/  

var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxesGender");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

/*2============================================================*/ 

var expandedBrans = false;

function showCheckboxesBrans() {
  var checkboxes = document.getElementById("checkboxesBrans");
  if (!expandedBrans) {
    checkboxes.style.display = "block";
    expandedBrans = true;
  } else {
    checkboxes.style.display = "none";
    expandedBrans = false;
  }
}

/*3============================================================*/ 

var expandedLenght = false;

function showCheckboxesLenght() {
  var checkboxes = document.getElementById("checkboxesLenght");
  if (!expandedLenght) {
    checkboxes.style.display = "block";
    expandedLenght = true;
  } else {
    checkboxes.style.display = "none";
    expandedLenght = false;
  }
}

/*4============================================================*/ 

var expandedShape = false;

function showCheckboxesShape() {
  var checkboxes = document.getElementById("checkboxesShape");
  if (!expandedShape) {
    checkboxes.style.display = "block";
    expandedShape = true;
  } else {
    checkboxes.style.display = "none";
    expandedShape = false;
  }
}

/*5============================================================*/ 

var expandedStyle = false;

function showCheckboxesStyle() {
  var checkboxes = document.getElementById("checkboxesStyle");
  if (!expandedStyle) {
    checkboxes.style.display = "block";
    expandedStyle = true;
  } else {
    checkboxes.style.display = "none";
    expandedStyle = false;
  }
}

/*6============================================================*/ 

var expandedPrice = false;

function showCheckboxesPrice() {
  var checkboxes = document.getElementById("checkboxesPrice");
  if (!expandedPrice) {
    checkboxes.style.display = "block";
    expandedPrice = true;
  } else {
    checkboxes.style.display = "none";
    expandedPrice = false;
  }
}

