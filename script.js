const poleServices = {
    it: [
        "Ingénierie informatique & Intégration",
        "Conception & Hébergement de sites Web",
        "Stratégie E-commerce & Community Management",
        "Audit, Maintenance & Infogérance",
        "Systèmes de billettique & de paiement",
        "Développement de solutions IA"
    ],
    com: [
        "Communication 360° & Publicité",
        "Stratégie événementielle & Activation",
        "Lobbying institutionnel & Parrainages",
        "Logistique technique (Audiovisuel, Captation)"
    ],
    afribuild: [
        "Construction & Infrastructures BTP",
        "Nettoyage professionnel industriel",
        "Entretien complet de biens meubles/immeubles"
    ],
    consulting: [
        "Négoce & Opérations commerciales internationales",
        "Prospection & Intermédiation commerciale",
        "Due Diligence & Audit de conformité",
        "Ingénierie de Financement & Médiation"
    ]
};

function updateDynamicFields() {
    const poleSelector = document.getElementById('poleSelector');
    const container = document.getElementById('serviceOptionsContainer');
    const serviceSelector = document.getElementById('serviceSelector');
    const selectedPole = poleSelector.value;
    
    if (selectedPole && poleServices[selectedPole]) {
        serviceSelector.innerHTML = '';
        poleServices[selectedPole].forEach(service => {
            let option = document.createElement('option');
            option.value = service.toLowerCase().replace(/ /g, "-");
            option.textContent = service;
            serviceSelector.appendChild(option);
        });
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
    }
}

function selectPole(poleValue) {
    const poleSelector = document.getElementById('poleSelector');
    if(poleSelector) {
        poleSelector.value = poleValue;
        updateDynamicFields();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Menu mobile toggle
    const mobileMenu = document.getElementById('mobileMenu');
    const navMenu = document.getElementById('navMenu');
    
    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileMenu.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Soumission du formulaire
    const form = document.getElementById('intelligentForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('clientName').value;
        alert(`Félicitations ${name} ! Votre demande a été segmentée et transmise avec succès au pôle compétent. Nos équipes à la Riviera Palmeraie prennent en charge votre dossier.`);
        form.reset();
        document.getElementById('serviceOptionsContainer').style.display = 'none';
    });
});