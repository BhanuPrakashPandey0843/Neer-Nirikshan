"use client";

import Image from "next/image";

const sections = [
  {
    number: "I",
    title: "Abstract",
    content: `With rapid urbanization, climate change, and industrial development in the contemporary world, there is an emerging lack of fresh water. Groundwater, being a highly crucial source for drinking and farming, is becoming increasingly prone to contamination by natural and human-induced activities. Estimation and forecasting of groundwater quality will therefore be very essential to ensure safe and sustainable water resource management. This work will present a performance comparison of machine learning methods for groundwater quality evaluation. Publicly accessible datasets to be obtained from Kaggle and government water quality databases will be used, including 16 important physicochemical parameters such as pH, electrical conductivity, total dissolved solids etc. Five supervised machine learning classifiers—Logistic Regression, Decision Tree, Random Forest, K-Nearest Neighbors (KNN), and Support Vector Machine (SVM)—will be applied and compared. The models will be evaluated in terms of accuracy, precision, recall, F1-score, and coefficient of determination (R²) to allow for a general comparison. The main objective will be to identify the optimal model for predicting groundwater quality, thereby providing a valid framework for environmental monitoring and facilitating data-driven decision-making for water resource management.`,
  },
  {
    number: "II",
    title: "Introduction",
    content: `The scarcity of fresh water has become one of the most pressing global challenges in the contemporary era, driven by rapid urbanization, industrial development, population growth, and the impacts of climate change. Among the available freshwater sources, groundwater plays a highly significant role in meeting the needs of drinking, irrigation, and industrial activities. However, groundwater resources are increasingly vulnerable to contamination caused by both natural processes, such as mineral dissolution, and human-induced activities, such as agricultural runoff, improper waste disposal, and industrial discharge. This contamination can severely impact public health, agriculture, and ecosystems, making the continuous monitoring and accurate assessment of groundwater quality an urgent necessity.

Traditional methods of groundwater quality assessment rely on laboratory-based chemical analyses, which, while accurate, can be time-consuming, costly, and impractical for large-scale or real-time monitoring. To overcome these challenges, machine learning (ML) techniques have emerged as powerful tools for analyzing complex environmental datasets, identifying hidden patterns, and providing accurate predictions with reduced computational effort.

In this project, a comparative evaluation of supervised machine learning algorithms will be conducted to assess and predict groundwater quality. Publicly accessible datasets obtained from Kaggle and official government water quality portals will be used, comprising 16 physicochemical parameters such as pH, electrical conductivity, total dissolved solids, and heavy metal concentrations. Five machine learning classifiers—Logistic Regression, Decision Tree, Random Forest, K-Nearest Neighbors (KNN), and Support Vector Machine (SVM)—will be implemented. The performance of these models will be compared using evaluation metrics such as accuracy, precision, recall, F1-score, and coefficient of determination (R²).

The objective of this work will be to determine the most suitable machine learning approach for groundwater quality assessment and prediction. By identifying the best-performing algorithm, this study aims to provide a reliable and scalable framework for environmental monitoring and to support data-driven decision-making in sustainable water resource management. `,
  },
  {
    number: "III",
    title: "Literature Review",
    content: `ML has become a crucial tool for water quality assessment. Traditional laboratory methods are accurate but slow and costly. Models like Random Forest and Gradient Boosting outperform Logistic Regression. GIS integration and water quality indices (IWQIs, DWQI, HPI) provide spatial mapping and risk assessment. Neural networks and RNNs show promise but need larger datasets. This study focuses specifically on groundwater using five ML models and standard metrics.`,
  },
  {
    number: "IV",
    title: "Materials and Methods",
    content: `Dataset Description: Publicly accessible datasets from Kaggle and government water portals with 16 parameters (pH, EC, TDS, heavy metals). Machine Learning Models: Logistic Regression, Decision Tree, Random Forest, KNN, and SVM. Evaluation Metrics: Accuracy, precision, recall, F1-score, and R² coefficient.`,
  },
  {
    number: "V",
    title: "Results & Discussion",
    content: `Random Forest achieved the highest accuracy. Decision Trees were interpretable but moderate in performance. KNN was sensitive to noisy data. Logistic Regression provided baseline results, and SVM achieved good generalization. GIS integration and predictive visualization support better water management decision-making.`,
  },
  {
    number: "VI",
    title: "References",
    content: (
      <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
        <li>
          Krishnamoorthy, L. & Lakshmanan, V.R., "Groundwater quality assessment using machine learning models," Environmental Science and Pollution Research, 2024.
        </li>
        <li>
          Ibrahim, H. et al., "Evaluation and Prediction of Groundwater Quality for Irrigation Using Integrated Water Quality Indices, ML, and GIS Approaches," Water, 2023.
        </li>
        <li>
          Gad, M. et al., "Comprehensive evaluation and prediction of groundwater quality and risk indices using ML," Heliyon, 2024.
        </li>
        <li>
          Eid, M.H. et al., "Evaluation of Groundwater Quality for Irrigation in Deep Aquifers," Water, 2023.
        </li>
        <li>
          El-Rawy, M. et al., "Integrated GIS and ML Technique for Groundwater Quality Assessment in Saudi Arabia," Water, 2023.
        </li>
      </ol>
    ),
  },
];

export default function Documentation() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 font-serif text-gray-900">
      <div className="max-w-4xl mx-auto px-6 leading-relaxed">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight text-gray-800">
          Performance Comparison of Machine Learning Approaches for Groundwater Quality Assessment
        </h1>

        <div className="space-y-10">
          {sections.map((section, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-2xl p-6 md:p-8 border border-gray-200 hover:shadow-xl transition duration-300"
            >
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">
                {section.number}. {section.title}
              </h2>
              <div className="text-sm md:text-base text-gray-700 whitespace-pre-line leading-7">
                {section.content}
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-16 text-center text-xs text-gray-500">
          © 2025 Jasika Kumari, Birla Institute of Technology, Mesra
        </footer>
      </div>
    </section>
  );
}
