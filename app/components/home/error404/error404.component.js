export const Error404Component ={
    template:`
<div class="container-fluid">
    <div class="row" >
        <div class="col error" >
            <h1>Error 404</h1>
            <h3>Not Found</h3>
            <a ui-sref='home'>
                <button type="button" class="btn btn-secondary">
                    Volver
                </button>
            </a>
        </div>
    </div>
</div>
`
}