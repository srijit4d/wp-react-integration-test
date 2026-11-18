import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { items, note, noteRef, noteAfter } = attributes;

	return (
		<section {...useBlockProps.save()}>
			<div className="timeline-block__list">
				{items.map((item, index) => (
					<div
						className="timeline-block__row"
						id={item.anchorId || undefined}
						key={`timeline-item-${index}`}
					>
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
								tagName="h4"
								className="timeline-block__heading"
								value={item.heading}
							/>
							{item.iconUrl && (
								<span className="timeline-block__icon">
									<img src={item.iconUrl} alt="" />
								</span>
							)}
							<RichText.Content
								tagName="div"
								multiline="p"
								className="timeline-block__para"
								value={item.description}
							/>
						</div>
					</div>
				))}
			</div>

			{(note || noteRef || noteAfter) && (
				<p className="timeline-block__note">
					<i>
						<RichText.Content tagName="span" value={note} />
						{noteRef && (
							<a href={`#${noteRef}`} aria-label={`Go to ${noteRef}`}>
								<sup>{noteRef} </sup>
							</a>
						)}
						<RichText.Content tagName="span" value={noteAfter} />
					</i>
				</p>
			)}
		</section>
	);
}