const locationData = {
  "ঢাকা (Dhaka)": {
    // ঢাকা জেলা
    "ঢাকা (Dhaka)": {
      "সাভার (Savar)": {
        "আমিনবাজার (Aminbazar)": {
          "আমিনবাজার (Aminbazar)": [
            "চকবাজার (Chakbazar)",
            "শাহীবাগ (Shaheebag)"
          ]
        },
        "পাথালিয়া (Pathalia)": {
          "পাথালিয়া (Pathalia)": [
            "চৌরাবাড়ি (Chourabari)",
            "শিমুলিয়া (Shimulia)"
          ]
        }
      },
      "কেরানীগঞ্জ (Keraniganj)": {
        "আগানগর (Aganagar)": {
          "আগানগর (Aganagar)": [
            "আগানগর পূর্ব (East Aganagar)",
            "আগানগর পশ্চিম (West Aganagar)"
          ]
        },
        "কালিন্দী (Kalindi)": {
          "কালিন্দী (Kalindi)": [
            "জিনজিরা (Jinjira)",
            "ধলেশ্বরী (Dholeswari)"
          ]
        }
      },
      "দোহার (Dohar)": {
        "নারিশা (Narisha)": {
          "নারিশা (Narisha)": [
            "বালিয়া (Balia)",
            "শ্রীনগর (Sreenagar)"
          ]
        },
        "মহম্মদপুর (Mohammadpur)": {
          "মহম্মদপুর (Mohammadpur)": [
            "চরকুশুমহাটি (Char Kushumhati)",
            "জয়পাড়া (Joypara)"
          ]
        }
      },
      "নবাবগঞ্জ (Nawabganj)": {
        "বান্দুরা (Bandura)": {
          "বান্দুরা (Bandura)": [
            "বাঘমারা (Baghmara)",
            "মহব্বতপুর (Mohabbatpur)"
          ]
        },
        "শিকারীপাড়া (Shikarpur)": {
          "শিকারীপাড়া (Shikarpur)": [
            "বড়গাঁও (Borgao)",
            "চাঁদপুর (Chandpur)"
          ]
        }
      },
      "ধামরাই (Dhamrai)": {
        "কালামপুর (Kalampur)": {
          "কালামপুর (Kalampur)": [
            "সাহাপুর (Sahapur)",
            "বনগ্রাম (Bongram)"
          ]
        },
        "সূয়াপুর (Suapur)": {
          "সূয়াপুর (Suapur)": [
            "কাঞ্চনপুর (Kanchanpur)",
            "মোড়াগাঁও (Moragao)"
          ]
        }
      }
      
      
      
      
      
      
      
      
      
      
      
      // ... ঢাকা জেলার অন্য উপজেলা ও ইউনিয়নগুলো এখানেই থাকবে
    },
    
    // গাজীপুর জেলা
    "গাজীপুর (Gazipur)": {
      "কাপাসিয়া (Kapasia)": {
        "কাপাসিয়া সদর (Kapasia Sadar)": {
          "কাপাসিয়া (Kapasia)": [
            "নতুন বাজার (Notun Bazar)",
            "পুরানা বাজার (Purana Bazar)"
          ]
        },
        "টোক (Tok)": {
          "টোক (Tok)": [
            "শালদা (Shalda)",
            "চরটিয়া (Chartia)"
          ]
        }
      },
      "কালীগঞ্জ (Kaliganj)": {
        "কালীগঞ্জ সদর (Kaliganj Sadar)": {
          "কালীগঞ্জ (Kaliganj)": [
            "চানপুর (Chanpur)",
            "চাঁদপুর (Chandpur)"
          ]
        },
        "নাগরী (Nagari)": {
          "নাগরী (Nagari)": [
            "দুর্গাপুর (Durgapur)",
            "মহাদেবপুর (Mahadebpur)"
          ]
        }
      },
      "শ্রীপুর (Sreepur)": {
        "শ্রীপুর (Sreepur)": {
          "শ্রীপুর (Sreepur)": [
            "মাওনা (Maona)",
            "ভাংনাহাটি (Vangnahati)"
          ]
        },
        "গাজীপুরা (Gazipura)": {
          "গাজীপুরা (Gazipura)": [
            "কেশরিতা (Keshorita)",
            "চান্দনা (Chandana)"
          ]
        }
      },
      "গাজীপুর সদর (Gazipur Sadar)": {
        "গাজীপুর সিটি কর্পোরেশন": {
          "টঙ্গী (Tongi)": [
            "টঙ্গী পূর্ব (Tongi East)",
            "টঙ্গী পশ্চিম (Tongi West)"
          ]
        }
      },
      "কালিয়াকৈর (Kaliakair)": {
        "কালিয়াকৈর (Kaliakair)": {
          "কালিয়াকৈর (Kaliakair)": [
            "চন্দ্রা (Chandra)",
            "মৌচাক (Mouchak)"
          ]
        }
      }
      
      
      
      
      
      
      
      
      // ... গাজীপুর জেলার অন্য উপজেলা ও ইউনিয়নগুলো এখানেই থাকবে
    },
    
    // নারায়ণগঞ্জ জেলা
    "নারায়ণগঞ্জ (Narayanganj)": {
      "নারায়ণগঞ্জ সদর (Narayanganj Sadar)": {
        "ফতুল্লা (Fatullah)": {
          "ফতুল্লা (Fatullah)": [
            "চৌফেরী (Chouferi)",
            "বাঁশতলা (Banshtola)"
          ]
        },
        "দুইপাড়া (Duipara)": {
          "দুইপাড়া (Duipara)": [
            "দুইপাড়া উত্তর (Duipara North)",
            "দুইপাড়া দক্ষিণ (Duipara South)"
          ]
        }
      },
      "সোনারগাঁও (Sonargaon)": {
        "জামপুর (Jampur)": {
          "জামপুর (Jampur)": [
            "জামপুর (Jampur Village)",
            "নতুন বাজার (Notun Bazar)"
          ]
        },
        "কাঁচপুর (Kanchpur)": {
          "কাঁচপুর (Kanchpur)": [
            "কাঁচপুর পূর্ব (Kanchpur East)",
            "কাঁচপুর পশ্চিম (Kanchpur West)"
          ]
        }
      },
      "বান্দর (Bandar)": {
        "ভূলতা (Bhulta)": {
          "ভূলতা (Bhulta)": [
            "ভূলতা উত্তর (Bhulta North)",
            "ভূলতা দক্ষিণ (Bhulta South)"
          ]
        },
        "মুরাপাড়া (Murapara)": {
          "মুরাপাড়া (Murapara)": [
            "মুরাপাড়া বাজার (Murapara Bazar)",
            "নতুনপুর (Notunpur)"
          ]
        }
      },
      "আড়াইহাজার (Araihazar)": {
        "ফতেপুর (Fatehpur)": {
          "ফতেপুর (Fatehpur)": [
            "ফতেপুর বাজার (Fatehpur Bazar)",
            "পুরান পাড়া (Puran Para)"
          ]
        },
        "দুপ্তারা (Duptara)": {
          "দুপ্তারা (Duptara)": [
            "দুপ্তারা পূর্ব (Duptara East)",
            "দুপ্তারা ডিগ্রি কলেজ এলাকা (Duptara Degree College Area)"
          ]
        }
      },
      "রূপগঞ্জ (Rupganj)": {
        "গুলিস্তান (Gulistan)": {
          "গুলিস্তান (Gulistan)": [
            "গুলিস্তান পূর্ব (Gulistan East)",
            "গুলিস্তান পশ্চিম (Gulistan West)"
          ]
        },
        "কালাচাঁদপুর (Kalachandpur)": {
          "কালাচাঁদপুর (Kalachandpur)": [
            "কালাচাঁদপুর বাজার (Kalachandpur Bazar)",
            "নতুনপাড়া (Notunpara)"
          ]
        }
      }
    // ... নারায়ণগঞ্জ জেলার অন্য উপজেলা ও ইউনিয়নগুলো এখানেই থাকবে
    },
    
    
    // মুন্সীগঞ্জ জেলা
    "মুন্সিগঞ্জ (Munshiganj)": {
      "মুন্সিগঞ্জ সদর (Munshiganj Sadar)": {
        "আধারা (Adhara)": {
          "আধারা (Adhara)": [
            "চাগলনকুল (Chagolnakhul)",
            "রামচন্ডপুর (Ramchandrapur)"
          ]
        },
        "বজ্রাজোগিনী (Bajra Jogini)": {
          "বজ্রাজোগিনী (Bajra Jogini)": [
            "বজ্রাজোগিনী পূর্ব (Bajra Jogini East)",
            "বজ্রাজোগিনী পশ্চিম (Bajra Jogini West)"
          ]
        }
      },
      "গজারিয়া (Gazaria)": {
        "বৌসিয়া (Bausia)": {
          "বৌসিয়া (Bausia)": [
            "পূর্ব বৌসিয়া (East Bausia)",
            "পশ্চিম বৌসিয়া (West Bausia)"
          ]
        },
        "নায়কামতি (Nayakamdi)": {
          "নায়কামতি (Nayakamdi)": [
            "নায়াকামতি (Nayakamdi Village)"
          ]
        }
      },
      "টঙ্গিবাড়ি (Tongibari)": {
        "বেতকা (Betka)": {
          "বেতকা (Betka)": [
            "উত্তর বেতকা (North Betka)",
            "দক্ষিণ বেতকা (South Betka)"
          ]
        }
      },
      "লোহাজাং (Lohajang)": {
        "কুমারভোগ (Kumarbhog)": {
          "কুমারভোগ (Kumarbhog)": [
            "পশ্চিম কুমারভোগ (West Kumarbhog)",
            "উত্তর কুমারভোগ (North Kumarbhog)"
          ]
        }
      },
      "সিরাজদিখান (Sirajdikhan)": {
        "গোপালপুর (Gopalpur)": {
          "গোপালপুর (Gopalpur)": [
            "গোপালপুর (Gopalpur Village)"
          ]
        }
      },
      "শ্রীনগর (Sreenagar)": {
        "অন্য ইউনিয়ন": {
          "শ্রীনগর পোস্ট": [
            "গ্রাম A", "গ্রাম B"
          ]
        }
      }
      
    
    
    // ... মুন্সীগঞ্জ জেলার অন্য উপজেলা ও ইউনিয়নগুলো এখানেই থাকবে
    },
    //গোপালগঞ্জ 
    "গোপালগঞ্জ (Gopalganj)": {
      "গোপালগঞ্জ সদর (Gopalganj Sadar)": {
        "ঘিয়াণঘাট (Ghialgachha)": {
          "ঘিয়াণঘাট (Ghialgachha)": [
            "ঘিয়াণঘাট (Ghialgachha Village)",
            "নন্দীগ্রাম (Nandigram)"
          ]
        },
        "রায়মোহনকাঁঠি (Raymhonkathi)": {
          "রায়মোহন (Raimohon)": [
            "রায়মোহনকাঁঠি (Raimohon Kathi Village)",
            "তালতলা (Taltala)"
          ]
        }
      },
      "কোটালীপাড়া (Kotalipara)": {
        "কোটালীপাড়া (Kotalipara)": {
          "কোটালীপাড়া (Kotalipara)": [
            "শাহপাড়া (Shahpara)",
            "চরবরদিশ (Charbardish)"
          ]
        },
        "ভোদই (Bhodia)": {
          "ভোদই (Bhodia)": [
            "ভোদই (Bhodia Village)",
            "মুকসিদ পাড়া (Muksid Para)"
          ]
        }
      },
      "টুঙ্গিপাড়া (Tungipara)": {
        "টুঙ্গিপাড়া (Tungipara)": {
          "টুঙ্গিপাড়া (Tungipara)": [
            "টুঙ্গিপাড়া (Tungipara Village)"
          ]
        }
      },
      
      
      
      
      
      
      
      
      
      
      
      
      "মুকসুদপুর (Muksudpur)": {
        "উজানি (Ujani Union)": {
          "উজানি (Ujani)": [
            "উজানি (Ujani Village)"
          ]
        },
        "কাশালিয়া (Kasalia Union)": {
          "কাশালিয়া (Kasalia)": [
            "কাশালিয়া (Kasalia Village)"
          ]
        },
        "খান্দারপাড়া (Khandarpar Union)": {
          "খান্দারপাড়া (Khandarpar)": [
            "খান্দারপাড়া (Khandarpar Village)"
          ]
        },
        "গোবিন্দপুর (Gobindapur Union)": {
          "গোবিন্দপুর (Gobindapur)": [
            "গোবিন্দপুর (Gobindapur Village)"
          ]
        },
        "ভাষবাড়িয়া (Banshbaria Union)": {
          "ভাষবাড়িয়া (Banshbaria)": [
            "ভাষবাড়িয়া (Banshbaria Village)"
          ]
        },
        "বহুগ্রাম (Bahugram Union)": {
          "বহুগ্রাম (Bahugram)": [
            "বহুগ্রাম (Bahugram Village)"
          ]
        },
        "বাটিকামারি (Batikamari Union)": {
          "বাটিকামারি (Batikamari)": [
            "বাটিকামারি (Batikamari Village)"
          ]
        },
        "ভাবড়াশুর (Bhabrasur Union)": {
          "ভাবড়াশুর (Bhabrasur)": [
            "ভাবড়াশুর (Bhabrasur Village)"
          ]
        },
        "মহারাজপুর (Maharajpur Union)": {
          "মহারাজপুর (Maharajpur)": [
            "মহারাজপুর (Maharajpur Village)"
          ]
        },//মহারাজপুর ইউনিয়ন শেষ
        "মোচনা (Mochna Union)": {
          
          "মোচনা (Mochna)": [
            "মোচনা (Mochna Village)"
          ],
          "আইকদিয়া (Aikdia)": [
            "পাইকদিয়া (Paikdia)",
            "আইকদিয়া (Aikdia)"
          ]
        },//মোচনা ইউনিয়ন শেষ
        "নানিকশির (Nanikshir Union)": {
          "নানিকশির (Nanikshir)": [
            "নানিকশির (Nanikshir Village)"
          ]
        },
        "পাশারগতি (Pasargati Union)": {
          "পাশারগতি (Pasargati)": [
            "পাশারগতি (Pasargati Village)"
          ]
        },
        "রাঘদি (Raghdi Union)": {
          "রাঘদি (Raghdi)": [
            "রাঘদি (Raghdi Village)"
          ]
        },
        "জলিরপাড়া (Jalirpar Union)": {
          "জলিরপাড়া (Jalirpar)": [
            "জলিরপাড়া (Jalirpar Village)"
          ]
        },
        "ডিঘ্নগর (Dignagar Union)": {
          "ডিঘ্নগর (Dignagar)": [
            "ডিঘ্নগর (Dignagar Village)"
          ]
        }
      },
      //মুকসুদপুর উপজেলা শেষ
      //কাশিয়ানী উপজেলা
      "কাশিয়ানী (Kashiani)": {
        "কাশিয়ানী (Kashiani)": {
          "কাশিয়ানী (Kashiani)": [
            "কাশিয়ানী (Kashiani Village)",
            "চরলেখা (Charlekha)"
          ]
        }
      },//কাশিয়া নিউ উপজেলা শেষ
      
    },//ঢাকা শেষ
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  },//ঢাকা বিভাগ শেষ
  //  চট্টগ্রাম বিভাগ
  "চট্টগ্রাম (Chattogram)": {
    "চট্টগ্রাম (Chattogram)": {
      "পটিয়া (Patiya)": {
        "খরনা (Khorna)": {
          "খরনা (Khorna)": [
            "খরনা (Khorna Village)"
          ]
        }
      }
    },
    "কক্সবাজার (Cox's Bazar)": {
      "টেকনাফ (Teknaf)": {
        "সাবরাং (Shabran)": {
          "সাবরাং (Shabran)": [
            "নয়াবাজার (Noyabazar)",
            "মৌলভীপাড়া (Moulvipara)"
          ]
        }
      }
    }
  }
  
  
  
};