import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { title, items } = attributes;

	return (
		<section {...useBlockProps.save()}>
			<RichText.Content
				tagName="h2"
				className="timeline-block__title"
				value={title}
			/>
			<div className="timeline-block__list">
				{items.map((item, index) => (
					<article className="timeline-block__item" key={`timeline-item-${index}`}>
						<div className="timeline-block__media">
							{item.imageUrl && (
								<img
									className="timeline-block__image"
									src={item.imageUrl}
									alt={item.imageAlt || ''}
								/>
							)}
						</div>

						<div className="timeline-block__content">
							<RichText.Content
								tagName="p"
								className="timeline-block__year"
								value={item.year}
							/>
							<RichText.Content
								tagName="h3"
								className="timeline-block__heading"
								value={item.heading}
							/>
							<RichText.Content
								tagName="p"
								className="timeline-block__description"
								value={item.description}
							/>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
