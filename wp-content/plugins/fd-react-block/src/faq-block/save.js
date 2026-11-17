import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { title, items, accordionMode } = attributes;
	const blockProps = useBlockProps.save({
		' data-accordion-mode': accordionMode,
	});

	return (
		<section {...blockProps}>
			<RichText.Content tagName="h2" className="faq-block__title" value={title} />
			<div className="faq-block__list">
				{items.map((item, index) => (
					<details className="faq-block__item" key={`faq-item-${index}`}>
						<summary className="faq-block__summary">
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
