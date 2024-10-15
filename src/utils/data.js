export const annexes = [
  "Annex 1 PERSONNEL LICENSING",
  "Annex 2 RULES OF THE AIR",
  "Annex 3 METEOROLOGICAL SERVICE FOR INTERNATIONAL AIR NAVIGATION PART I - CORE SARPs",
  "Annex 4 AERONAUTICAL CHARTS",
  "Annex 5 UNITS OF MEASUREMENT TO BE USED IN AIR AND GROUND OPERATIONS",
];
export const Chapters = [
  "ABBREVIATIONS",
  "FOREWORD",
  "INTERNATIONAL STANDARDS AND RECOMMENDED PRACTICES",
  "CHAPTER 1.    DEFINITIONS AND GENERAL RULES CONCERNING LICENCES",
  "CHAPTER 2.    LICENCES AND RATINGS FOR PILOTS",
];
export const Provisions = [
  "Title 1.0 | ABBREVIATIONS (used in this Annex) AFIS Aerodrome flight information service",
  "Title 1.0 | ABBREVIATIONS (used in this Annex) AFISAerodrome flight information service ",
];
export const ancProgresBarContents = [
  {
    index: 1,
    content: "Document Type",
  },
  {
    index: 2,
    content: "Select Annex",
  },
  {
    index: 3,
    content: "Annex Version",
  },
  {
    index: 4,
    content: "Chapters",
  },
  {
    index: 5,
    content: "Provisions",
  },
  {
    index: 6,
    content: "Confirm",
  },
];

export const states = [
  {
    index: 1,
    state: "UK",
  },
  {
    index: 2,
    state: "Aus",
  },
  {
    index: 2,
    state: "IND",
  },
];

export const annexData = [
  {
    annexId: 1,
    annexName: "Annex 1 - PERSONNEL LICENSING",
    chapters: [
      {
        chapterId: 1,
        chapterName: "Chapter 1",
        provisions: [
          {
            provisionId: 1,
            provisionName: "Provision 1.1",
            pdfPath: require("../assests/p2.pdf"),
          },
          {
            provisionId: 2,
            provisionName: "Provision 1.2",
            pdfPath: require("../assests/p3.pdf"),
          },
        ],
      },
      {
        chapterId: 2,
        chapterName: "Chapter 2",
        provisions: [
          {
            provisionId: 3,
            provisionName: "Provision 2.1",
            pdfPath: require("../assests/ticket.pdf"),
          },
          {
            provisionId: 4,
            provisionName: "Provision 2.2",
            pdfPath: require("../assests/p4.pdf"),
          },
          {
            provisionId: 5,
            provisionName: "Provision 2.3",
            pdfPath: require("../assests/p2.pdf"),
          },
        ],
      },
    ],
  },
  {
    annexId: 2,
    annexName: "Annex 2 - OPERATIONAL STANDARDS",
    chapters: [
      {
        chapterId: 1,
        chapterName: "Chapter 1",
        provisions: [
          {
            provisionId: 6,
            provisionName: "Provision 1.1",
            pdfPath: require("../assests/p3.pdf"),
          },
          {
            provisionId: 7,
            provisionName: "Provision 1.2",
            pdfPath: require("../assests/ticket.pdf"),
          },
          {
            provisionId: 8,
            provisionName: "Provision 1.3",
            pdfPath: require("../assests/p4.pdf"),
          },
        ],
      },
    ],
  },
];
