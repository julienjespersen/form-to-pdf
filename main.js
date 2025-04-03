import { jsPDF } from "https://cdnjs.cloudflare.com/ajax/libs/jspdf/3.0.0/jspdf.umd.min.js";

// Default export is a4 paper, portrait, using millimeters for units
const doc = new jsPDF('https://cdnjs.cloudflare.com/ajax/libs/jspdf/3.0.0/jspdf.umd.min.js');

doc.text("Hello world!", 10, 10);
doc.save("a4.pdf");