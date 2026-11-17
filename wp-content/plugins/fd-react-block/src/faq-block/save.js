import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { title, items } = attributes;

	return (
		<section {...useBlockProps.save()}>
			<RichText.Content tagName="h2" className="faq-block__title" value={title} />
			<div className="faq-block__list">
				{items.map((item, index) => (
					<div className="faq-block__item" key={`faq-item-${index}`}>
						<RichText.Content
							tagName="h3"
							className="faq-block__question"
							value={item.question}
						/>
						<RichText.Content
							tagName="p"
							className="faq-block__answer"
							value={item.answer}
						/>
					</div>
				))}
			</div>
		</section>
	);
}
