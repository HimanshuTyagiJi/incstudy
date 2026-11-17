(() => {
  const form = document.querySelector('[data-search-form]');
  const input = document.querySelector('[data-search-input]');
  const output = document.querySelector('[data-search-results]');
  if (!form || !input || !output) return;

  const items = [
    { title: 'CCSU BCA Semester 1 Hub', description: 'Complete 1st semester notes, syllabus, and blueprints', url: '/ccsu/bca/semester-1/' },
    { title: 'Mathematics - I (BCA-101)', description: '5+ Years solved questions: Leibniz, Cayley-Hamilton, Matrices', url: '/ccsu/bca/semester-1/mathematics-1-important-questions/' },
    { title: 'Programming Principle & Algorithm (BCA-102)', description: '7+ Years solved questions: C code, flowcharts, recursion', url: '/ccsu/bca/semester-1/c-programming-important-questions/' },
    { title: 'Computer Fundamentals & Office Automation (BCA-103)', description: '10 Years solved questions: Block diagram, DOS, RAM vs ROM', url: '/ccsu/bca/semester-1/computer-fundamentals-important-questions/' },
    { title: 'Principles of Management (BCA-104)', description: '5 Years solved questions: Maslow pyramid, Lewin change model', url: '/ccsu/bca/semester-1/principles-of-management-important-questions/' },
    { title: 'Business Communication (BCA-105 / 106)', description: '8 Years solved questions: 7 Cs, letter writing formats, models', url: '/ccsu/bca/semester-1/business-communication-important-questions/' },
    { title: 'C Programming Dec 2023 Solved Paper', description: 'CCSU authentic 75-mark solved question paper', url: '/ccsu/bca/semester-1/papers/c-programming-dec-2023/' },
    { title: 'CCSU BCA Degree Overview', description: '3-Year 6-semester complete course roadmap and marks structure', url: '/ccsu/bca/' },
    { title: 'BCA Syllabus & Blueprint Guide', description: 'Official semester curriculum breakdown and marks distribution', url: '/courses/bca/syllabus/' }
  ];

  const render = q => {
    const n = q.trim().toLowerCase();
    if (!n) {
      output.innerHTML = '<p>Enter a keyword to search the resources available on IncStudy.</p>';
      return;
    }
    const found = items.filter(i => (i.title + ' ' + i.description).toLowerCase().includes(n));
    output.innerHTML = found.length
      ? found.map(i => `<a class="search-result-card" href="${i.url}"><strong>${i.title}</strong><span>${i.description}</span><span class="result-arrow">→</span></a>`).join('')
      : '<p>No matching resources were found. Try searching for "C Programming", "Maths", or "Semester 1".</p>';
  };

  const params = new URLSearchParams(location.search);
  input.value = params.get('q') || '';
  if (input.value) render(input.value);

  form.addEventListener('submit', e => {
    e.preventDefault();
    const q = input.value.trim();
    const url = new URL(location.href);
    q ? url.searchParams.set('q', q) : url.searchParams.delete('q');
    history.replaceState({}, '', url);
    render(q);
  });
})();
