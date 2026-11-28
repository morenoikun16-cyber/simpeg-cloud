// Identitas Perusahaan & Kredensial Admin
const COMPANY_NAME = "PT Nusantara Digital Integrasi";
const ADMIN_CREDENTIALS = {
    username: "admin",
    password: "admin123",
    displayName: "Administrator HRIS"
};

// Dataset 50 Pegawai Awal (Profesi disesuaikan dengan PT Nusantara Digital Integrasi)
const initialEmployees = [
    { id: 1, nip: "198503122010011001", nama: "Dr. Hendra Wijaya, M.Kom.", dept: "Teknologi Informasi", jabatan: "Chief Technology Officer", golongan: "IV/b", status: "Aktif", tglMasuk: "2010-01-15", email: "hendra.wijaya@nusantaradigital.co.id", telepon: "081234567801" },
    { id: 2, nip: "198807242012122002", nama: "Siti Rahmawati, S.E., M.Ak.", dept: "Keuangan & Akuntansi", jabatan: "Finance & Billing Manager", golongan: "IV/a", status: "Aktif", tglMasuk: "2012-12-01", email: "siti.rahmawati@nusantaradigital.co.id", telepon: "081234567802" },
    { id: 3, nip: "199001152014031003", nama: "Budi Santoso, S.Psi.", dept: "Sumber Daya Manusia", jabatan: "Tech Talent Acquisition Lead", golongan: "III/d", status: "Aktif", tglMasuk: "2014-03-10", email: "budi.santoso@nusantaradigital.co.id", telepon: "081234567803" },
    { id: 4, nip: "199105092015022004", nama: "Dewi Lestari, S.T.", dept: "Operasional & Logistik", jabatan: "Data Center Operations Lead", golongan: "III/c", status: "Aktif", tglMasuk: "2015-02-18", email: "dewi.lestari@nusantaradigital.co.id", telepon: "081234567804" },
    { id: 5, nip: "199211302016041005", nama: "Ahmad Fauzi, S.I.Kom.", dept: "Pemasaran & Humas", jabatan: "Enterprise Account Executive", golongan: "III/c", status: "Cuti", tglMasuk: "2016-04-05", email: "ahmad.fauzi@nusantaradigital.co.id", telepon: "081234567805" },
    { id: 6, nip: "198709182011012006", nama: "Rina Kartika, S.H., M.H.", dept: "Hukum & Kepatuhan", jabatan: "Data Privacy & Legal Counsel", golongan: "IV/a", status: "Aktif", tglMasuk: "2011-01-20", email: "rina.kartika@nusantaradigital.co.id", telepon: "081234567806" },
    { id: 7, nip: "199402142018011007", nama: "Rizky Pratama, S.Kom.", dept: "Teknologi Informasi", jabatan: "Cloud Solutions Architect", golongan: "III/b", status: "Aktif", tglMasuk: "2018-01-12", email: "rizky.pratama@nusantaradigital.co.id", telepon: "081234567807" },
    { id: 8, nip: "199506212019032008", nama: "Nadia Putri, S.Ak.", dept: "Keuangan & Akuntansi", jabatan: "SaaS Revenue & Tax Specialist", golongan: "III/b", status: "Aktif", tglMasuk: "2019-03-01", email: "nadia.putri@nusantaradigital.co.id", telepon: "081234567808" },
    { id: 9, nip: "199308112017051009", nama: "Dimas Saputra, S.M.", dept: "Sumber Daya Manusia", jabatan: "People Operations Specialist", golongan: "III/c", status: "Aktif", tglMasuk: "2017-05-15", email: "dimas.saputra@nusantaradigital.co.id", telepon: "081234567809" },
    { id: 10, nip: "198912042013081010", nama: "Eko Prasetyo, S.T.", dept: "Operasional & Logistik", jabatan: "Hardware Deployment Supervisor", golongan: "III/d", status: "Aktif", tglMasuk: "2013-08-22", email: "eko.prasetyo@nusantaradigital.co.id", telepon: "081234567810" },
    { id: 11, nip: "199604172020022011", nama: "Fitri Handayani, S.Sos.", dept: "Pemasaran & Humas", jabatan: "Product Marketing Specialist", golongan: "III/a", status: "Aktif", tglMasuk: "2020-02-10", email: "fitri.handayani@nusantaradigital.co.id", telepon: "081234567811" },
    { id: 12, nip: "199103252015061012", nama: "Galih Permana, S.H.", dept: "Hukum & Kepatuhan", jabatan: "IT Governance & Compliance Officer", golongan: "III/c", status: "Aktif", tglMasuk: "2015-06-19", email: "galih.permana@nusantaradigital.co.id", telepon: "081234567812" },
    { id: 13, nip: "199708092021011013", nama: "Ilham Ramadhan, S.Kom.", dept: "Teknologi Informasi", jabatan: "Fullstack Software Engineer", golongan: "III/a", status: "Aktif", tglMasuk: "2021-01-04", email: "ilham.ramadhan@nusantaradigital.co.id", telepon: "081234567813" },
    { id: 14, nip: "199511122019022014", nama: "Maya Anggraini, S.E.", dept: "Keuangan & Akuntansi", jabatan: "Project Cost Controller", golongan: "III/b", status: "Cuti", tglMasuk: "2019-02-14", email: "maya.anggraini@nusantaradigital.co.id", telepon: "081234567814" },
    { id: 15, nip: "199007032014091015", nama: "Taufik Hidayat, S.Psi.", dept: "Sumber Daya Manusia", jabatan: "Technical Learning & L&D Lead", golongan: "III/d", status: "Aktif", tglMasuk: "2014-09-01", email: "taufik.hidayat@nusantaradigital.co.id", telepon: "081234567815" },
    { id: 16, nip: "199205192016072016", nama: "Wulan Dari, S.T.", dept: "Operasional & Logistik", jabatan: "Field Implementation Coordinator", golongan: "III/c", status: "Aktif", tglMasuk: "2016-07-11", email: "wulan.dari@nusantaradigital.co.id", telepon: "081234567816" },
    { id: 17, nip: "199801282022031017", nama: "Yoga Pratama, S.Ds.", dept: "Pemasaran & Humas", jabatan: "Brand & Digital Visual Designer", golongan: "III/a", status: "Aktif", tglMasuk: "2022-03-01", email: "yoga.pratama@nusantaradigital.co.id", telepon: "081234567817" },
    { id: 18, nip: "198604142010122018", nama: "Yuni Astuti, S.H., M.Kn.", dept: "Hukum & Kepatuhan", jabatan: "Enterprise SLA & Contract Analyst", golongan: "IV/a", status: "Aktif", tglMasuk: "2010-12-06", email: "yuni.astuti@nusantaradigital.co.id", telepon: "081234567818" },
    { id: 19, nip: "199310052018031019", nama: "Fajar Nugroho, S.TI.", dept: "Teknologi Informasi", jabatan: "Database Reliability Engineer", golongan: "III/b", status: "Aktif", tglMasuk: "2018-03-19", email: "fajar.nugroho@nusantaradigital.co.id", telepon: "081234567819" },
    { id: 20, nip: "199609122020082020", nama: "Anisa Rahma, S.Ak.", dept: "Keuangan & Akuntansi", jabatan: "Financial Reporting Analyst", golongan: "III/a", status: "Aktif", tglMasuk: "2020-08-17", email: "anisa.rahma@nusantaradigital.co.id", telepon: "081234567820" },
    { id: 21, nip: "198802222012041021", nama: "Bayu Setiawan, S.E.", dept: "Sumber Daya Manusia", jabatan: "HRIS & Workforce Manager", golongan: "IV/a", status: "Aktif", tglMasuk: "2012-04-02", email: "bayu.setiawan@nusantaradigital.co.id", telepon: "081234567821" },
    { id: 22, nip: "199407162018092022", nama: "Citra Kirana, S.Log.", dept: "Operasional & Logistik", jabatan: "IT Vendor & Procurement Specialist", golongan: "III/b", status: "Aktif", tglMasuk: "2018-09-10", email: "citra.kirana@nusantaradigital.co.id", telepon: "081234567822" },
    { id: 23, nip: "199112082015111023", nama: "Deni Kurniawan, S.I.Kom.", dept: "Pemasaran & Humas", jabatan: "Tech Summit & Event Lead", golongan: "III/c", status: "Non-Aktif", tglMasuk: "2015-11-23", email: "deni.kurniawan@nusantaradigital.co.id", telepon: "081234567823" },
    { id: 24, nip: "199503302019062024", nama: "Elsa Safitri, S.H.", dept: "Hukum & Kepatuhan", jabatan: "Intellectual Property & Licensing Officer", golongan: "III/b", status: "Aktif", tglMasuk: "2019-06-15", email: "elsa.safitri@nusantaradigital.co.id", telepon: "081234567824" },
    { id: 25, nip: "199711112021071025", nama: "Farhan Maulana, S.Kom.", dept: "Teknologi Informasi", jabatan: "Cybersecurity & SOC Engineer", golongan: "III/a", status: "Aktif", tglMasuk: "2021-07-01", email: "farhan.maulana@nusantaradigital.co.id", telepon: "081234567825" },
    { id: 26, nip: "198906072013022026", nama: "Gita Gutawa, S.E., M.M.", dept: "Keuangan & Akuntansi", jabatan: "Accounting & Treasury Supervisor", golongan: "III/d", status: "Aktif", tglMasuk: "2013-02-11", email: "gita.gutawa@nusantaradigital.co.id", telepon: "081234567826" },
    { id: 27, nip: "199601192020041027", nama: "Hafizah Nur, S.Psi.", dept: "Sumber Daya Manusia", jabatan: "Employee Experience Specialist", golongan: "III/a", status: "Aktif", tglMasuk: "2020-04-20", email: "hafizah.nur@nusantaradigital.co.id", telepon: "081234567827" },
    { id: 28, nip: "199004252014061028", nama: "Irfan Hakim, S.T.", dept: "Operasional & Logistik", jabatan: "Network Infrastructure & Rack Lead", golongan: "III/d", status: "Aktif", tglMasuk: "2014-06-09", email: "irfan.hakim@nusantaradigital.co.id", telepon: "081234567828" },
    { id: 29, nip: "199309142017082029", nama: "Julia Perez, S.Sos.", dept: "Pemasaran & Humas", jabatan: "Corporate Relations & PR Lead", golongan: "III/c", status: "Aktif", tglMasuk: "2017-08-14", email: "julia.perez@nusantaradigital.co.id", telepon: "081234567829" },
    { id: 30, nip: "198712292011051030", nama: "Kevin Sanjaya, S.H.", dept: "Hukum & Kepatuhan", jabatan: "Regulatory & Risk Advisory Lead", golongan: "IV/a", status: "Aktif", tglMasuk: "2011-05-02", email: "kevin.sanjaya@nusantaradigital.co.id", telepon: "081234567830" },
    { id: 31, nip: "199805032022082031", nama: "Larasati Putri, S.Kom.", dept: "Teknologi Informasi", jabatan: "Product UI/UX Designer", golongan: "III/a", status: "Aktif", tglMasuk: "2022-08-08", email: "larasati.putri@nusantaradigital.co.id", telepon: "081234567831" },
    { id: 32, nip: "199208172016091032", nama: "Muhammad Iqbal, S.Ak.", dept: "Keuangan & Akuntansi", jabatan: "Internal IT & Finance Auditor", golongan: "III/c", status: "Aktif", tglMasuk: "2016-09-19", email: "m.iqbal@nusantaradigital.co.id", telepon: "081234567832" },
    { id: 33, nip: "199412212018112033", nama: "Novita Sari, S.M.", dept: "Sumber Daya Manusia", jabatan: "Compensation & Benefits Analyst", golongan: "III/b", status: "Aktif", tglMasuk: "2018-11-05", email: "novita.sari@nusantaradigital.co.id", telepon: "081234567833" },
    { id: 34, nip: "198810102012071034", nama: "Oki Setiana, S.T.", dept: "Operasional & Logistik", jabatan: "Managed Services Operations Manager", golongan: "IV/a", status: "Aktif", tglMasuk: "2012-07-16", email: "oki.setiana@nusantaradigital.co.id", telepon: "081234567834" },
    { id: 35, nip: "199703152021092035", nama: "Putri Marino, S.I.Kom.", dept: "Pemasaran & Humas", jabatan: "Digital Content & Growth Strategist", golongan: "III/a", status: "Cuti", tglMasuk: "2021-09-13", email: "putri.marino@nusantaradigital.co.id", telepon: "081234567835" },
    { id: 36, nip: "199106282015041036", nama: "Qori Sandioriva, S.H.", dept: "Hukum & Kepatuhan", jabatan: "ISO 27001 & Compliance Analyst", golongan: "III/c", status: "Aktif", tglMasuk: "2015-04-27", email: "qori.sandioriva@nusantaradigital.co.id", telepon: "081234567836" },
    { id: 37, nip: "199509092019101037", nama: "Reza Rahadian, S.Kom.", dept: "Teknologi Informasi", jabatan: "Cloud Platform Engineer", golongan: "III/b", status: "Aktif", tglMasuk: "2019-10-07", email: "reza.rahadian@nusantaradigital.co.id", telepon: "081234567837" },
    { id: 38, nip: "199011242014122038", nama: "Shinta Bachir, S.E.", dept: "Keuangan & Akuntansi", jabatan: "Accounts Receivable & Payable Lead", golongan: "III/d", status: "Aktif", tglMasuk: "2014-12-01", email: "shinta.bachir@nusantaradigital.co.id", telepon: "081234567838" },
    { id: 39, nip: "199607022020111039", nama: "Tio Pakusadewo, S.Psi.", dept: "Sumber Daya Manusia", jabatan: "Engineering Career & Culture Specialist", golongan: "III/a", status: "Aktif", tglMasuk: "2020-11-16", email: "tio.pakusadewo@nusantaradigital.co.id", telepon: "081234567839" },
    { id: 40, nip: "199304182017022040", nama: "Ussy Sulistiawaty, S.T.", dept: "Operasional & Logistik", jabatan: "System Integration Project Coordinator", golongan: "III/c", status: "Aktif", tglMasuk: "2017-02-20", email: "ussy.s@nusantaradigital.co.id", telepon: "081234567840" },
    { id: 41, nip: "199809272023011041", nama: "Vino Bastian, S.Kom.", dept: "Teknologi Informasi", jabatan: "Enterprise Helpdesk & L2 Engineer", golongan: "III/a", status: "Aktif", tglMasuk: "2023-01-09", email: "vino.bastian@nusantaradigital.co.id", telepon: "081234567841" },
    { id: 42, nip: "198901132013052042", nama: "Winda Viska, S.Ak.", dept: "Keuangan & Akuntansi", jabatan: "IT Asset & Inventory Controller", golongan: "III/d", status: "Aktif", tglMasuk: "2013-05-13", email: "winda.viska@nusantaradigital.co.id", telepon: "081234567842" },
    { id: 43, nip: "199405292018041043", nama: "Xavier Malik, S.M.", dept: "Sumber Daya Manusia", jabatan: "Payroll & Time Attendance Specialist", golongan: "III/b", status: "Aktif", tglMasuk: "2018-04-23", email: "xavier.malik@nusantaradigital.co.id", telepon: "081234567843" },
    { id: 44, nip: "199108042015092044", nama: "Yasmine Wildblood, S.Log.", dept: "Operasional & Logistik", jabatan: "Supply Chain & Device Logistics Analyst", golongan: "III/c", status: "Non-Aktif", tglMasuk: "2015-09-14", email: "yasmine.w@nusantaradigital.co.id", telepon: "081234567844" },
    { id: 45, nip: "199702112021041045", nama: "Zulfikar Ali, S.I.Kom.", dept: "Pemasaran & Humas", jabatan: "Technical Documentation & Media Officer", golongan: "III/a", status: "Aktif", tglMasuk: "2021-04-12", email: "zulfikar.ali@nusantaradigital.co.id", telepon: "081234567845" },
    { id: 46, nip: "198611192011082046", nama: "Ayu Tingting, S.H., M.H.", dept: "Hukum & Kepatuhan", jabatan: "Corporate & Vendor Legal Specialist", golongan: "IV/a", status: "Aktif", tglMasuk: "2011-08-29", email: "ayu.tingting@nusantaradigital.co.id", telepon: "081234567846" },
    { id: 47, nip: "199512062019081047", nama: "Baim Wong, S.Kom.", dept: "Teknologi Informasi", jabatan: "Data & BI Analytics Engineer", golongan: "III/b", status: "Aktif", tglMasuk: "2019-08-19", email: "baim.wong@nusantaradigital.co.id", telepon: "081234567847" },
    { id: 48, nip: "199203232016112048", nama: "Cinta Laura, S.E.", dept: "Keuangan & Akuntansi", jabatan: "Budgeting & FP&A Analyst", golongan: "III/c", status: "Aktif", tglMasuk: "2016-11-28", email: "cinta.laura@nusantaradigital.co.id", telepon: "081234567848" },
    { id: 49, nip: "199610152020061049", nama: "Desta Mahendra, S.Psi.", dept: "Sumber Daya Manusia", jabatan: "Agile Team & Culture Facilitator", golongan: "III/a", status: "Aktif", tglMasuk: "2020-06-08", email: "desta.m@nusantaradigital.co.id", telepon: "081234567849" },
    { id: 50, nip: "198805012012102050", nama: "Enzy Storia, S.T.", dept: "Operasional & Logistik", jabatan: "Facility & Infrastructure Maintenance Lead", golongan: "IV/a", status: "Aktif", tglMasuk: "2012-10-15", email: "enzy.storia@nusantaradigital.co.id", telepon: "081234567850" }
];

const STORAGE_KEY = 'simpeg_employees_nusantara_v1';
const AUTH_KEY = 'simpeg_admin_session_v1';
let employees = [];
let currentPage = 1;
const rowsPerPage = 15;
let manualEmailEdited = false;

function initApp() {
    applyCompanyBranding();

    const session = localStorage.getItem(AUTH_KEY);
    if (session) {
        try {
            const parsed = JSON.parse(session);
            if (parsed && parsed.loggedIn) {
                enterDashboard(parsed.adminName || ADMIN_CREDENTIALS.displayName);
                return;
            }
        } catch (_) {
            localStorage.removeItem(AUTH_KEY);
        }
    }
    showLoginScreen();
}

function applyCompanyBranding() {
    document.title = `SIMPEG Cloud - ${COMPANY_NAME}`;
    const loginComp = document.getElementById('loginCompanyName');
    const navComp = document.getElementById('navbarCompanyName');
    const bannerComp = document.getElementById('bannerCompanyName');
    if (loginComp) loginComp.textContent = COMPANY_NAME;
    if (navComp) navComp.textContent = COMPANY_NAME;
    if (bannerComp) bannerComp.textContent = COMPANY_NAME;
}

function showLoginScreen() {
    document.getElementById('appShell').classList.add('hidden');
    document.getElementById('loginScreen').classList.remove('hidden');
}

function enterDashboard(adminName) {
    document.getElementById('loginScreen').classList.add('hidden');
    document.getElementById('appShell').classList.remove('hidden');
    document.getElementById('activeAdminLabel').textContent = adminName;

    const storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
        employees = JSON.parse(storedData);
    } else {
        employees = [...initialEmployees];
        saveToStorage();
    }
    populateJabatanOptions();
    renderAll();
}

function showDashboardSection() {
    const sec = document.getElementById('dashboardSection');
    if (sec) {
        sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    renderAll();
}

function fillDemoAdmin() {
    document.getElementById('loginUsername').value = ADMIN_CREDENTIALS.username;
    document.getElementById('loginPassword').value = ADMIN_CREDENTIALS.password;
    document.getElementById('loginError').classList.add('hidden');
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const user = document.getElementById('loginUsername').value.trim();
    const pass = document.getElementById('loginPassword').value;

    if (user === ADMIN_CREDENTIALS.username && pass === ADMIN_CREDENTIALS.password) {
        document.getElementById('loginError').classList.add('hidden');
        localStorage.setItem(AUTH_KEY, JSON.stringify({
            loggedIn: true,
            adminName: ADMIN_CREDENTIALS.displayName
        }));
        enterDashboard(ADMIN_CREDENTIALS.displayName);
    } else {
        document.getElementById('loginError').classList.remove('hidden');
    }
});

function logoutAdmin() {
    localStorage.removeItem(AUTH_KEY);
    document.getElementById('loginForm').reset();
    document.getElementById('loginError').classList.add('hidden');
    showLoginScreen();
}

function saveToStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
}

function resetData() {
    if (confirm(`Kembalikan data ke 50 data pegawai awal ${COMPANY_NAME}? Semua perubahan manual akan dihapus.`)) {
        employees = [...initialEmployees];
        saveToStorage();
        currentPage = 1;
        populateJabatanOptions();
        renderAll();
    }
}

function populateJabatanOptions() {
    const uniqueJabatan = [...new Set(employees.map(e => e.jabatan))].sort((a, b) => a.localeCompare(b, 'id'));
    const filterJabatan = document.getElementById('filterJabatan');
    const currentVal = filterJabatan.value;

    filterJabatan.innerHTML = `<option value="">Semua Jabatan</option>`;
    uniqueJabatan.forEach(j => {
        filterJabatan.innerHTML += `<option value="${escapeHtml(j)}">${escapeHtml(j)}</option>`;
    });
    if (uniqueJabatan.includes(currentVal)) {
        filterJabatan.value = currentVal;
    }

    const datalist = document.getElementById('jabatanList');
    datalist.innerHTML = uniqueJabatan.map(j => `<option value="${escapeHtml(j)}"></option>`).join('');
}

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function renderAll() {
    updateStats();
    renderTable();
}

function updateStats() {
    const total = employees.length;
    const aktif = employees.filter(e => e.status === 'Aktif').length;
    const nonAktif = employees.filter(e => e.status !== 'Aktif').length;
    const depts = new Set(employees.map(e => e.dept)).size;

    document.getElementById('stat-total').textContent = total;
    document.getElementById('stat-aktif').textContent = aktif;
    document.getElementById('stat-nonaktif').textContent = nonAktif;
    document.getElementById('stat-dept').textContent = depts;
}

function getSortedAndFilteredData() {
    const search = document.getElementById('searchInput').value.trim().toLowerCase();
    const dept = document.getElementById('filterDept').value;
    const jabatan = document.getElementById('filterJabatan').value;
    const golongan = document.getElementById('filterGolongan').value;
    const status = document.getElementById('filterStatus').value;
    const groupBy = document.getElementById('groupBySelect').value;

    let list = employees.filter(emp => {
        const matchSearch = !search ||
            emp.nip.toLowerCase().includes(search) ||
            emp.nama.toLowerCase().includes(search) ||
            emp.jabatan.toLowerCase().includes(search) ||
            emp.dept.toLowerCase().includes(search) ||
            emp.golongan.toLowerCase().includes(search);
        const matchDept = !dept || emp.dept === dept;
        const matchJabatan = !jabatan || emp.jabatan === jabatan;
        const matchGolongan = !golongan || emp.golongan === golongan;
        const matchStatus = !status || emp.status === status;
        return matchSearch && matchDept && matchJabatan && matchGolongan && matchStatus;
    });

    // Urutkan utama berdasarkan Nama Lengkap sesuai abjad (A-Z)
    list.sort((a, b) => a.nama.localeCompare(b.nama, 'id', { sensitivity: 'base' }));

    // Jika dikelompokkan per kategori, urutkan kategori A-Z lalu nama A-Z di dalamnya
    if (groupBy !== 'none') {
        list.sort((a, b) => {
            const catA = (a[groupBy] || '').toString();
            const catB = (b[groupBy] || '').toString();
            const cmpCat = catA.localeCompare(catB, 'id', { sensitivity: 'base' });
            if (cmpCat !== 0) return cmpCat;
            return a.nama.localeCompare(b.nama, 'id', { sensitivity: 'base' });
        });
    }

    return list;
}

function getGroupedEntries(list, groupBy) {
    if (groupBy === 'none') {
        return [{ groupName: null, items: list }];
    }
    const map = new Map();
    list.forEach(emp => {
        const key = emp[groupBy] || 'Lainnya';
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(emp);
    });
    return Array.from(map.entries()).map(([groupName, items]) => ({ groupName, items }));
}

function renderTable() {
    const data = getSortedAndFilteredData();
    const groupBy = document.getElementById('groupBySelect').value;
    const tbody = document.getElementById('employeeTableBody');
    tbody.innerHTML = '';

    const totalPages = Math.ceil(data.length / rowsPerPage) || 1;
    if (currentPage > totalPages) currentPage = totalPages;

    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const pageData = data.slice(start, end);

    if (pageData.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" class="text-center py-8 text-slate-400">Tidak ada data pegawai yang cocok dengan filter.</td></tr>`;
    } else {
        const grouped = getGroupedEntries(pageData, groupBy);
        const labelMap = {
            dept: 'Departemen',
            jabatan: 'Jabatan',
            golongan: 'Golongan',
            status: 'Status'
        };
        let rowCounter = start + 1;

        grouped.forEach(group => {
            if (group.groupName !== null) {
                const headerLabel = labelMap[groupBy] || 'Kategori';
                tbody.innerHTML += `
                    <tr class="group-header-row">
                        <td colspan="8" class="py-2.5 px-4 text-xs uppercase tracking-wider">
                            <i class="fa-solid fa-layer-group mr-1.5"></i> ${headerLabel}: ${escapeHtml(group.groupName)}
                            <span class="ml-2 bg-indigo-200/80 text-indigo-900 px-2 py-0.5 rounded-full text-[11px]">${group.items.length} pegawai</span>
                        </td>
                    </tr>
                `;
            }

            group.items.forEach(emp => {
                const badgeColor = emp.status === 'Aktif'
                    ? 'bg-emerald-100 text-emerald-700 border-emerald-200'
                    : emp.status === 'Cuti'
                    ? 'bg-amber-100 text-amber-700 border-amber-200'
                    : 'bg-rose-100 text-rose-700 border-rose-200';

                tbody.innerHTML += `
                    <tr class="hover:bg-slate-50 transition">
                        <td class="py-3 px-4 text-slate-500">${rowCounter++}</td>
                        <td class="py-3 px-4 font-mono text-xs text-slate-600">${escapeHtml(emp.nip)}</td>
                        <td class="py-3 px-4 font-medium text-slate-800">${escapeHtml(emp.nama)}</td>
                        <td class="py-3 px-4 text-slate-600">${escapeHtml(emp.dept)}</td>
                        <td class="py-3 px-4 text-slate-600">${escapeHtml(emp.jabatan)}</td>
                        <td class="py-3 px-4"><span class="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-xs font-semibold">${escapeHtml(emp.golongan)}</span></td>
                        <td class="py-3 px-4"><span class="px-2.5 py-0.5 rounded-full text-xs font-medium border ${badgeColor}">${escapeHtml(emp.status)}</span></td>
                        <td class="py-3 px-4 text-center space-x-1 whitespace-nowrap">
                            <button onclick="viewDetail(${emp.id})" title="Detail" class="text-blue-600 hover:bg-blue-50 p-1.5 rounded transition"><i class="fa-solid fa-eye"></i></button>
                            <button onclick="editEmployee(${emp.id})" title="Edit" class="text-amber-600 hover:bg-amber-50 p-1.5 rounded transition"><i class="fa-solid fa-pen-to-square"></i></button>
                            <button onclick="deleteEmployee(${emp.id})" title="Hapus" class="text-rose-600 hover:bg-rose-50 p-1.5 rounded transition"><i class="fa-solid fa-trash"></i></button>
                        </td>
                    </tr>
                `;
            });
        });
    }

    renderPagination(data.length, totalPages, start, end);
}

function renderPagination(totalItems, totalPages, start, end) {
    const info = document.getElementById('paginationInfo');
    const controls = document.getElementById('paginationControls');

    const showStart = totalItems === 0 ? 0 : start + 1;
    const showEnd = Math.min(end, totalItems);
    info.textContent = `Menampilkan ${showStart}–${showEnd} dari ${totalItems} pegawai`;

    controls.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const activeClass = i === currentPage
            ? 'bg-indigo-600 text-white border-indigo-600'
            : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-100';
        controls.innerHTML += `
            <button onclick="goToPage(${i})" class="px-3 py-1 border rounded text-xs font-medium transition ${activeClass}">
                ${i}
            </button>
        `;
    }
}

function goToPage(page) {
    currentPage = page;
    renderTable();
}

// Auto-fill nilai saat tambah pegawai
function generateAutoNip() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    const seq = String(employees.length + 1).padStart(6, '0');
    return `${y}${m}${d}202601${seq}`;
}

function generateAutoPhone() {
    const seq = String(7800 + employees.length + 1).padStart(4, '0');
    return `08123456${seq}`;
}

function syncAutoContact() {
    if (manualEmailEdited) return;
    const namaRaw = document.getElementById('empNama').value.trim().toLowerCase();
    const cleaned = namaRaw
        .replace(/[^a-z\s]/g, '')
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .join('.');
    document.getElementById('empEmail').value = cleaned ? `${cleaned}@nusantaradigital.co.id` : `pegawai.${employees.length + 1}@nusantaradigital.co.id`;
}

document.getElementById('empEmail').addEventListener('input', () => {
    manualEmailEdited = true;
});

function openModal(isEdit = false) {
    document.getElementById('employeeModal').classList.remove('hidden');
    document.getElementById('employeeModal').classList.add('flex');
    if (!isEdit) {
        manualEmailEdited = false;
        document.getElementById('modalTitle').textContent = 'Tambah Data Pegawai';
        document.getElementById('autoFillNotice').classList.remove('hidden');
        document.getElementById('employeeForm').reset();
        document.getElementById('empId').value = '';
        document.getElementById('empNip').value = generateAutoNip();
        document.getElementById('empJabatan').value = 'Software & Systems Engineer';
        document.getElementById('empGolongan').value = 'III/a';
        document.getElementById('empStatus').value = 'Aktif';
        document.getElementById('empTglMasuk').value = new Date().toISOString().split('T')[0];
        document.getElementById('empEmail').value = `pegawai.${employees.length + 1}@nusantaradigital.co.id`;
        document.getElementById('empTelepon').value = generateAutoPhone();
    } else {
        document.getElementById('autoFillNotice').classList.add('hidden');
    }
}

function closeModal() {
    document.getElementById('employeeModal').classList.add('hidden');
    document.getElementById('employeeModal').classList.remove('flex');
}

document.getElementById('employeeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const id = document.getElementById('empId').value;
    const empData = {
        id: id ? parseInt(id) : Date.now(),
        nip: document.getElementById('empNip').value.trim(),
        nama: document.getElementById('empNama').value.trim(),
        dept: document.getElementById('empDept').value,
        jabatan: document.getElementById('empJabatan').value.trim(),
        golongan: document.getElementById('empGolongan').value,
        status: document.getElementById('empStatus').value,
        tglMasuk: document.getElementById('empTglMasuk').value,
        email: document.getElementById('empEmail').value.trim(),
        telepon: document.getElementById('empTelepon').value.trim()
    };

    if (id) {
        const index = employees.findIndex(item => item.id === parseInt(id));
        if (index !== -1) employees[index] = empData;
    } else {
        employees.push(empData);
    }

    saveToStorage();
    populateJabatanOptions();
    closeModal();
    renderAll();
});

function editEmployee(id) {
    const emp = employees.find(e => e.id === id);
    if (!emp) return;

    manualEmailEdited = true;
    document.getElementById('modalTitle').textContent = 'Edit Data Pegawai';
    document.getElementById('empId').value = emp.id;
    document.getElementById('empNip').value = emp.nip;
    document.getElementById('empNama').value = emp.nama;
    document.getElementById('empDept').value = emp.dept;
    document.getElementById('empJabatan').value = emp.jabatan;
    document.getElementById('empGolongan').value = emp.golongan;
    document.getElementById('empStatus').value = emp.status;
    document.getElementById('empTglMasuk').value = emp.tglMasuk;
    document.getElementById('empEmail').value = emp.email;
    document.getElementById('empTelepon').value = emp.telepon;

    openModal(true);
}

function deleteEmployee(id) {
    const emp = employees.find(e => e.id === id);
    if (!emp) return;
    if (confirm(`Yakin ingin menghapus data pegawai "${emp.nama}"?`)) {
        employees = employees.filter(e => e.id !== id);
        saveToStorage();
        populateJabatanOptions();
        renderAll();
    }
}

function viewDetail(id) {
    const emp = employees.find(e => e.id === id);
    if (!emp) return;

    document.getElementById('detailContent').innerHTML = `
        <div class="flex items-center space-x-3 pb-3 border-b border-slate-100">
            <div class="w-12 h-12 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-lg">
                ${escapeHtml(emp.nama.charAt(0))}
            </div>
            <div>
                <h4 class="font-bold text-slate-800 text-base">${escapeHtml(emp.nama)}</h4>
                <p class="text-xs font-mono text-slate-500">NIP: ${escapeHtml(emp.nip)}</p>
            </div>
        </div>
        <div class="grid grid-cols-2 gap-y-2.5 pt-2">
            <span class="text-slate-500">Perusahaan:</span><span class="font-medium text-slate-800">${escapeHtml(COMPANY_NAME)}</span>
            <span class="text-slate-500">Departemen:</span><span class="font-medium text-slate-800">${escapeHtml(emp.dept)}</span>
            <span class="text-slate-500">Jabatan:</span><span class="font-medium text-slate-800">${escapeHtml(emp.jabatan)}</span>
            <span class="text-slate-500">Golongan:</span><span class="font-medium text-slate-800">${escapeHtml(emp.golongan)}</span>
            <span class="text-slate-500">Status:</span><span class="font-medium text-slate-800">${escapeHtml(emp.status)}</span>
            <span class="text-slate-500">Tanggal Masuk:</span><span class="font-medium text-slate-800">${escapeHtml(emp.tglMasuk)}</span>
            <span class="text-slate-500">Email:</span><span class="font-medium text-slate-800 break-all">${escapeHtml(emp.email)}</span>
            <span class="text-slate-500">No. Telepon:</span><span class="font-medium text-slate-800">${escapeHtml(emp.telepon)}</span>
        </div>
    `;
    document.getElementById('detailModal').classList.remove('hidden');
    document.getElementById('detailModal').classList.add('flex');
}

function closeDetailModal() {
    document.getElementById('detailModal').classList.add('hidden');
    document.getElementById('detailModal').classList.remove('flex');
}

// Ekspor ke PDF Terkelompok per Kategori
function exportPDF() {
    if (!window.jspdf || !window.jspdf.jsPDF) {
        alert("Pustaka PDF sedang dimuat atau tidak tersedia. Pastikan koneksi internet aktif lalu coba lagi.");
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });

    const data = getSortedAndFilteredData();
    const rawGroupBy = document.getElementById('groupBySelect').value;
    const activeGroupBy = rawGroupBy === 'none' ? 'dept' : rawGroupBy;
    const grouped = getGroupedEntries(data, activeGroupBy);

    const groupLabelMap = {
        dept: 'Departemen',
        jabatan: 'Jabatan',
        golongan: 'Golongan',
        status: 'Status'
    };

    doc.setFontSize(15);
    doc.setTextColor(30, 41, 59);
    doc.text(`LAPORAN DATA PEGAWAI - ${COMPANY_NAME.toUpperCase()}`, 14, 15);

    doc.setFontSize(9.5);
    doc.setTextColor(100, 116, 139);
    doc.text(`Dikelompokkan per ${groupLabelMap[activeGroupBy]} | Diurutkan A–Z | Total Data: ${data.length} Pegawai`, 14, 21);

    let startY = 26;

    grouped.forEach((group, idx) => {
        if (idx > 0) {
            startY = doc.lastAutoTable.finalY + 8;
            if (startY > 175) {
                doc.addPage();
                startY = 16;
            }
        }

        doc.setFontSize(11);
        doc.setTextColor(49, 46, 129);
        doc.text(`${groupLabelMap[activeGroupBy]}: ${group.groupName} (${group.items.length} orang)`, 14, startY);

        const bodyRows = group.items.map((emp, i) => [
            i + 1,
            emp.nip,
            emp.nama,
            emp.dept,
            emp.jabatan,
            emp.golongan,
            emp.status,
            emp.email,
            emp.telepon
        ]);

        doc.autoTable({
            startY: startY + 3,
            head: [["No", "NIP", "Nama Lengkap", "Departemen", "Jabatan", "Gol.", "Status", "Email", "Telepon"]],
            body: bodyRows,
            theme: 'grid',
            styles: { fontSize: 8, cellPadding: 2 },
            headStyles: { fillColor: [67, 56, 202], textColor: 255 },
            margin: { left: 14, right: 14 }
        });
    });

    doc.save(`Laporan_SIMPEG_Nusantara_Digital_${groupLabelMap[activeGroupBy]}.pdf`);
}

// Event Listeners Pencarian, Filter & Pengelompokan
['searchInput', 'filterDept', 'filterJabatan', 'filterGolongan', 'filterStatus', 'groupBySelect'].forEach(id => {
    const el = document.getElementById(id);
    const evt = id === 'searchInput' ? 'input' : 'change';
    el.addEventListener(evt, () => {
        currentPage = 1;
        renderTable();
    });
});

document.addEventListener('DOMContentLoaded', initApp);