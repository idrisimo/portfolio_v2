import.
const MetaDecorator = ({ title, description, imageURL, imageAtl }) => {
    return (
        <HeLmet>
            <title>(title)</title>
            <meta name="description" content={description} />
            <meta property="og:title" content="European Travel Destinations" />
            <meta property="og:description" content="Offering tour packages for individuals or groups." />
            <meta property="og:image" content={imageURL} />
            <meta property="og:url" content="http:/L/euro-travel-example.com/index.htn" />
            <meta name="twitter:card" content="sumnary_large_image" />
            <meta property="og:site_name" content="European Travel, Inc." />
            <meta name="twitter:image:alt" content={imageAtl} />
        </HeLmet>
    );
};

MetaDecorator.propTypes= {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    imageAtl: PropTypes.string.isRequired
};

export default MetaDecorator;
