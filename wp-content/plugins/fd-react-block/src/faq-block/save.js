import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		accentTitle,
		title,
		items,
		accordionMode,
		summaryIcon,
		summaryIconImageUrl,
		summaryIconImageAlt,
	} = attributes;

	const iconMap = { none: '', arrow: '➜', plus: '+', check: '✓', star: '★' };
	const selectedIcon = iconMap[summaryIcon] || '';

	// no leading space in the key, so view.js can read dataset.accordionMode
	const blockProps = useBlockProps.save({
		'data-accordion-mode': accordionMode,
	});

	return (
		<section {...blockProps}>
			<div className="faq-block__container">
				<div className="faq-block__heading">
					<h2 className="faq-block__title">
						{accentTitle && (
							<>
								<RichText.Content
									tagName="span"
									className="faq-block__accent"
									value={accentTitle}
								/>{' '}
							</>
						)}
						<RichText.Content tagName="span" value={title} />
					</h2>
				</div>

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
								{item.testimonialDes && (
									<blockquote className="faq-block__quote">
										<RichText.Content tagName="p" value={item.testimonialDes} />
										<RichText.Content tagName="cite" value={item.testimonialAuthor} />
									</blockquote>
								)}
							</div>
						</details>
					))}
				</div>
			</div>
		</section>
	);
}