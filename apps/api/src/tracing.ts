import  *  as  opentelemetry  from  "@opentelemetry/sdk-node";
import { getNodeAutoInstrumentations } from  "@opentelemetry/auto-instrumentations-node";
import { diag, DiagConsoleLogger, DiagLogLevel } from  "@opentelemetry/api";
import { OTLPTraceExporter } from  "@opentelemetry/exporter-trace-otlp-http";

// For troubleshooting, set the log level to DiagLogLevel.DEBUG

diag.setLogger(new  DiagConsoleLogger(), DiagLogLevel.INFO);

const  sdk = new  opentelemetry.NodeSDK({
    // traceExporter: new opentelemetry.tracing.ConsoleSpanExporter(),
    traceExporter:  new  OTLPTraceExporter({
        url: "http://localhost:5080/api/default/v1/traces",
        headers: {
            Authorization: "Basic cm9vdEBleGFtcGxlLmNvbTpkTE1iczQ5cDdtYW02UWNo",
            "stream-name": "default"
        },
    }),
    instrumentations: [getNodeAutoInstrumentations()],
    serviceName:  "chat-app-api",
});

sdk.start();