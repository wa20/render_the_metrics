const express = require('express');
const promMid = require('express-prometheus-middleware');
const path = require('path');
const cors = require('cors')

const homeRoute = require('./routes/home')
const timeRoute = require('./routes/time')

const PORT = 3500
const app = express();
app.use(cors())


// inesrting middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//Route paths
app.use('/', homeRoute);
app.use('/time', timeRoute);

app.use(function(req, res, next) {
  if (!req.headers.authorization && req.get["Authorization"] != "mysecrettoken") {
    return res.status(403).json({ error: "No credentials or incorrect credentials sent!" });
  }
  
  next()
});


app.use(promMid({
    metricsPath: '/metrics',
    collectDefaultMetrics: true,
    requestDurationBuckets: [0.1, 0.5, 1, 1.5],
    requestLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
    responseLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
    /**
     * Uncomenting the `authenticate` callback will make the `metricsPath` route
     * require authentication. This authentication callback can make a simple
     * basic auth test, or even query a remote server to validate access.
     * To access /metrics you could do:
     * curl -X GET user:password@localhost:9091/metrics
     */
    // authenticate: req => req.headers.authorization === 'Basic dXNlcjpwYXNzd29yZA==',
    /**
     * Uncommenting the `extraMasks` config will use the list of regexes to
     * reformat URL path names and replace the values found with a placeholder value
    */
    // extraMasks: [/..:..:..:..:..:../],
    /**
     * The prefix option will cause all metrics to have the given prefix.
     * E.g.: `app_prefix_http_requests_total`
     */
    // prefix: 'app_prefix_',
    /**
     * Can add custom labels with customLabels and transformLabels options
     */
    // customLabels: ['contentType'],
    // transformLabels(labels, req) {
    //   // eslint-disable-next-line no-param-reassign
    //   labels.contentType = req.headers['content-type'];
    // },
  }));



app.listen(PORT, console.log(`server listening on ${PORT}`));