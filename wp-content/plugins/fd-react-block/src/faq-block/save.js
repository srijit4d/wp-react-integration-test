import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { title, items, accordionMode, summaryIcon, summaryIconImageUrl, summaryIconImageAlt } = attributes;
	const iconMap = {
		none: '',
		arrow: '➜',
		plus: '+',
		check: '✓',
		star: '★',
	};
	const selectedIcon = iconMap[summaryIcon] || '';
	const blockProps = useBlockProps.save({
		' data-accordion-mode': accordionMode,
		' data-summary-icon': summaryIcon,
		' data-summary-icon-image-url': summaryIconImageUrl,
	});

	return (
		<section {...blockProps}>
			<RichText.Content tagName="h2" className="faq-block__title" value={title} />
			<div className="faq-block__list">
				{items.map((item, index) => (
					<details className="faq-block__item" key={`faq-item-${index}`}>
						<summary className="faq-block__summary">
							{summaryIcon === 'custom-image' && summaryIconImageUrl ? (
								<span className="faq-block__leading-icon faq-block__leading-icon--image" aria-hidden="true">
									<img src={summaryIconImageUrl} alt={summaryIconImageAlt || ''} />
								</span>
							) : selectedIcon ? (
								<span className="faq-block__leading-icon" aria-hidden="true">
									{selectedIcon}
								</span>
							) : null}
							<RichText.Content
								tagName="span"
								className="faq-block__question"
								value={item.question}
							/>
						</summary>
						<div className="faq-block__content">
							<RichText.Content
								tagName="p"
								className="faq-block__answer"
								value={item.answer}
							/>
						</div>
					</details>
				))}
			</div>
		</section>
	);
}
