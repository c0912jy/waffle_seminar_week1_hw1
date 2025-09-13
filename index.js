// About Me: 원형 카드 클릭 시 반투명 정보 오버레이 토글
document.addEventListener('click', (e) => {
  const circle = e.target.closest('.circle');
  if (circle) {
    circle.classList.toggle('is-open');
  }
});

// Contact: 클릭 시 라벨 ↔ 실제 계정 토글
document.querySelectorAll('.contact-row').forEach((row) => {
  const span = row.querySelector('.contact-text');
  const label = row.dataset.label;
  const detail = row.dataset.detail;

  row.addEventListener('click', () => {
    span.textContent = (span.textContent === label) ? detail : label;
  });

  // 키보드 접근성
  row.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter' || ev.key === ' ') {
      ev.preventDefault();
      row.click();
    }
  });
});
