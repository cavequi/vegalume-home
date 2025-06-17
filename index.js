function revelaEsconde(conteudo) {
    if (conteudo === "localizacao") {
        document.getElementById("p-localizacao").classList.toggle("mostrar");
        document.getElementById("btn-localizacao").classList.toggle("menos");
    }
    if (conteudo === "horarios") {
        document.getElementById("p-horarios").classList.toggle("mostrar");
        document.getElementById("btn-horarios").classList.toggle("menos");
    }
    if (conteudo === "contatos") {
        document.getElementById("p-contatos").classList.toggle("mostrar");
        document.getElementById("btn-contatos").classList.toggle("menos");
    }
}

const btn = document.getElementById('scroll-top');
btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelectorAll("btn-login").addEventListener('click', function (e) {
    alert("Função não disponível na versão mobile atualmente.");
})
function togglesidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
    window.addEventListener('resize', function () {
    if (window.innerWidth > 1024) {
        sidebar.style.width = '0'; // Esconde a sidebar
        showSideBar = false;
    }
});

// Fecha a sidebar ao clicar em links (modo mobile)
if (window.innerWidth < 1024) {
    const links = sidebar.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function () {
            sidebar.style.width = '0';
            showSideBar = false;
        });
    });
}
}

