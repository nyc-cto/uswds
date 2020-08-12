
exports.Alert = function (config) {
    return (
        <div class = {`usa-alert ${config.class}`}>
            <div class {`usa-alert__body`}>
                alertHeader = alertHeader(config);
                <p class = {`usa-alert__text ${config.innerText}`}></p>
            </div>
        </div>
    )
}