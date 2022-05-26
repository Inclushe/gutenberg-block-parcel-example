// Register the block
window.wp.blocks.registerBlockType( 'gutenberg-examples/example-01-basic-esnext', {
    edit: function () {
        return <p> Hello world (from the editor)</p>;
    },
    save: function () {
        return <p> Hola mundo (from the frontend) </p>;
    },
} );