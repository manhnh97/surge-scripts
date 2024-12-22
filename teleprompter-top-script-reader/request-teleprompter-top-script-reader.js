let headers = $request.headers; 

delete headers['X-Revenuecat-Etag'];

$done({headers});