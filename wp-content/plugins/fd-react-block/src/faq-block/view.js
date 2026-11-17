document.addEventListener('DOMContentLoaded', () => {
	const faqBlocks = document.querySelectorAll('.wp-block-fourthdimension-faq-block');

	faqBlocks.forEach((block) => {
		const mode = block.dataset.accordionMode || 'multi';
		if (mode !== 'single') {
			return;
		}

		const items = Array.from(block.querySelectorAll('details.faq-block__item'));
		items.forEach((item) => {
			item.addEventListener('toggle', () => {
				if (!item.open) {
					return;
				}

				items.forEach((otherItem) => {
					if (otherItem !== item) {
						otherItem.open = false;
					}
				});
			});
		});
	});
});
