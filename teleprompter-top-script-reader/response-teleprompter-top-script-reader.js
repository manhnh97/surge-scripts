// Surge HTTP Response Modification Script

if ($request.url.includes('/v1/subscribers') && $request.url.includes('/offerings')) {
    let body = JSON.parse($response.body);

    // Modify the response to set the lifetime subscription
    body.current_offering_id = "lifetime";
    body.offerings = [
        {
            "description": "Lifetime offer",
            "identifier": "lifetime",
            "metadata": null,
            "packages": [
                {
                    "identifier": "$rc_lifetime",
                    "platform_product_identifier": "teleprompter_lifetime"
                }
            ]
        }
    ];

    // Return the modified body
    $done({ body: JSON.stringify(body) });
} else {
    $done({});
}
