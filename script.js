const surveyJson = {
  "locale": "es",
  "title": "FORMULARIO DE PETICIÓN DE ASILO",
  "description": "La información que usted consigne en este formulario será usada para la presentación de su solicitud ante la entidad migratoria correspondiente. Por favor responda cada pregunta con veracidad.",
  "logo": "https://api.surveyjs.io/private/Surveys/files?name=a362a035-fea5-40e0-81c5-991c98be0b65",
  "logoWidth": "0px",
  "logoHeight": "0px",
  "logoFit": "none",
  "logoPosition": "right",
  "pages": [
    {
      "name": "Información del Titular",
      "questionTitleLocation": "left",
      "title": "INFORMACIÓN DEL TITULAR",
      "elements": [
        {
          "type": "text",
          "name": "radicado",
          "title": {
            "es": "Radicado"
          },
          "titleLocation": "top",
          "defaultValueExpression": "{radicadoVar}",
          "isRequired": true,
          "readOnly": true
        },{
          "type": "panel",
          "name": "panel1",
          "elements": [
            {
              "type": "boolean",
              "name": "Autorizacion_datos",
              "title": {
                "es": "¿Autoriza el tratamiento de sus datos personales para ser usados en la presentación de su solicitud de asilo ante la entidad migratoria correspondiente?"
              },
              "titleLocation": "top",
              "isRequired": true
            },
            {
              "type": "boolean",
              "name": "datos_veridicos",
              "title": {
                "es": "¿Se compromete a diligenciar la información solicitada de forma verídica?"
              },
              "titleLocation": "top",
              "isRequired": true
            }
          ]
        }
      ]
    },
    {
      "name": "informacion_personal",
      "title": "INFORMACIÓN PERSONAL",
      "navigationTitle": "1. Información Personal",
      "elements": [
        {
          "type": "panel",
          "name": "panel_DATOS_PERSONALES",
          "title": {
            "es": "DATOS PERSONALES"
          },
          "state": "expanded",
          "elements": [
            {
              "type": "text",
              "name": "Nombre_completo",
              "title": {
                "default": "Nombre Completo",
                "es": "Nombre completo"
              },
              "description": "Tal cual como aparece en el documento de identidad aportado",
              "isRequired": true
            },
            {
              "type": "text",
              "name": "Edad",
              "title": {
                "es": "Edad"
              },
              "inputType": "number"
            },
            {
              "type": "text",
              "name": "Fecha_nacimiento",
              "startWithNewLine": false,
              "title": {
                "default": "Fecha Nacimiento",
                "es": "Fecha de nacimiento"
              },
              "isRequired": true,
              "inputType": "date",
              "maxValueExpression": "today()"
            },
            {
              "type": "dropdown",
              "name": "País_Nacimiento",
              "title": {
                "es": "País de nacimiento"
              },
              "description": {
                "es": "Indique su país de origen"
              },
              "isRequired": true,
              "choicesByUrl": {
                "url": "https://surveyjs.io/api/CountriesExample"
              }
            },
            {
              "type": "text",
              "name": "Ciudad_Nacimiento",
              "startWithNewLine": false,
              "title": {
                "es": "Ciudad de nacimiento"
              },
              "description": {
                "es": "Ciudad de Origen"
              },
              "isRequired": true
            }
          ]
        },
        {
          "type": "boolean",
          "name": "tiene_SSN",
          "title": {
            "es": "¿Tiene número de seguro social (SSN)?"
          },
          "isRequired": true
        },
        {
          "type": "panel",
          "name": "Información SSN",
          "visibleIf": "{tiene_SSN} = true",
          "elements": [
            {
              "type": "text",
              "name": "SSN",
              "title": {
                "default": "Social Security number",
                "es": "Número de seguro social (SSN)"
              },
              "isRequired": true,
              "requiredErrorText": "Su SSN debe ser un número de 9 dígitos"
            },
            {
              "type": "boolean",
              "name": "trabajo_SSN",
              "startWithNewLine": false,
              "title": {
                "es": "¿Ha trabajado con este número de seguro social (SSN)?"
              },
              "isRequired": true
            }
          ]
        },
        {
          "type": "boolean",
          "name": "cambio_direccion",
          "title": {
            "es": "¿Planea cambiar de dirección en los próximos 6 meses?"
          },
          "isRequired": true
        },
        {
          "type": "text",
          "name": "Nueva_Residencia",
          "visibleIf": "{cambio_direccion} = true",
          "title": {
            "es": "Indique la nueva dirección de vivienda"
          },
          "description": {
            "default": "Incluir el Zip Code en la dirección",
            "es": "Incluir el Zip Code en la dirección"
          },
          "isRequired": true
        }
      ]
    },
    {
      "name": "Informacion_Demográfica",
      "title": "INFORMACIÓN DEMOGRÁFICA",
      "navigationTitle": "2. Información Demográfica",
      "elements": [
        {
          "type": "dropdown",
          "name": "Orientacion_Sexual",
          "title": {
            "default": "Orientación Sexual",
            "es": "Orientación sexual"
          },
          "isRequired": true,
          "choices": [
            "Heterosexual",
            "Homosexual",
            "Bisexual"
          ]
        },
        {
          "type": "text",
          "name": "Identidad_Genero",
          "startWithNewLine": false,
          "title": {
            "default": "Identidad de Genero",
            "es": "Identidad de genero"
          }
        },
        {
          "type": "dropdown",
          "name": "grupos_racial",
          "title": {
            "default": "¿Pertenece a Alguno de estos Grupos Raciales?",
            "es": "¿Pertenece a alguno de estos grupos raciales?"
          },
          "isRequired": true,
          "choices": [
            {
              "value": "Afrodescendiente",
              "text": {
                "es": "Afrodescendiente"
              }
            },
            {
              "value": "Latino/Hispano",
              "text": {
                "es": "Latino/Hispano"
              }
            },
            {
              "value": "Asiático",
              "text": {
                "es": "Asiático"
              }
            },
            {
              "value": "Comunidad Indígena",
              "text": {
                "es": "Comunidad Indígena"
              }
            },
            {
              "value": "Cuacásico",
              "text": {
                "es": "Cuacásico"
              }
            }
          ],
          "showOtherItem": true,
          "showNoneItem": true
        },
        {
          "type": "dropdown",
          "name": "religion",
          "title": "¿Pertenece a alguna de estas religiones o cultos?",
          "isRequired": true,
          "choices": [
            {
              "value": "Cristianismo",
              "text": {
                "es": "Cristianismo"
              }
            },
            {
              "value": "Judaísmo",
              "text": {
                "es": "Judaísmo"
              }
            },
            {
              "value": "Hinduismo",
              "text": {
                "es": "Hinduismo"
              }
            },
            {
              "value": "Islam",
              "text": {
                "es": "Islam"
              }
            },
            {
              "value": "Budismo",
              "text": {
                "es": "Budismo"
              }
            }
          ],
          "showOtherItem": true,
          "showNoneItem": true
        }
      ]
    },
    {
      "name": "Registro_Familiar",
      "title": "REGISTRO FAMILIAR ",
      "description": "En esta segunda sección compilaremos toda la información relacionada con sus padres y hermanos , así como medios hermanos que pueda tener. De igual manera de su esposa e hijos en caso de tenerlos.",
      "navigationTitle": "3. Registro Familiar",
      "elements": [
        {
          "type": "panel",
          "name": "datos_padre",
          "title": {
            "es": "DATOS DEL PADRE"
          },
          "state": "expanded",
          "elements": [
            {
              "type": "text",
              "name": "Nombre_padre",
              "title": {
                "es": "Nombre completo "
              }
            },
            {
              "type": "text",
              "name": "Lugar_nacimiento_padre",
              "title": {
                "es": "Lugar de nacimiento "
              },
              "description": {
                "es": "Indique el país y la ciudad de nacimiento de su padre"
              }
            },
            {
              "type": "dropdown",
              "name": "padre_con_vida",
              "title": {
                "es": "¿Su padre aún se encuentra con vida?"
              },
              "isRequired": true,
              "choices": [
                {
                  "value": "Si",
                  "text": {
                    "es": "Si"
                  }
                },
                {
                  "value": "No",
                  "text": {
                    "es": "No"
                  }
                },
                {
                  "value": "No Conoció a su padre",
                  "text": {
                    "es": "No conoció a su padre"
                  }
                }
              ]
            },
            {
              "type": "panel",
              "name": "panel_padre_con_vida",
              "visibleIf": "{padre_con_vida} = 'Si'",
              "elements": [
                {
                  "type": "text",
                  "name": "Lugar_residencia_actual_padre",
                  "title": {
                    "es": "Lugar de residencia actual"
                  },
                  "description": "Indique en qué país vive actualmente su padre"
                },
                {
                  "type": "text",
                  "name": "Estatus_migratorio_actual_padre",
                  "title": {
                    "es": "Estatus migratorio actual"
                  },
                  "description": "En caso de que su padre viva en los Estados Unidos o en otro país, por favor indique su estatus migratorio"
                }
              ]
            },
            {
              "type": "panel",
              "name": "panel_padre_defuncion",
              "visibleIf": "{padre_con_vida} = 'No'",
              "elements": [
                {
                  "type": "text",
                  "name": "fecha_defuncion_padre",
                  "title": {
                    "es": "Fecha estimada defunción del padre"
                  },
                  "inputType": "date"
                },
                {
                  "type": "comment",
                  "name": "causa_fallecimiento_padre",
                  "title": {
                    "es": "Causa de fallecimiento del padre"
                  }
                }
              ]
            }
          ]
        },
        {
          "type": "panel",
          "name": "panel_datos_madre",
          "title": {
            "es": "DATOS DE LA MADRE"
          },
          "state": "expanded",
          "elements": [
            {
              "type": "text",
              "name": "Nombre_madre",
              "title": {
                "es": "Nombre completo "
              }
            },
            {
              "type": "text",
              "name": "Lugar_nacimiento_madre",
              "title": {
                "es": "Lugar de nacimiento "
              },
              "description": {
                "es": "Indique el país y la ciudad de nacimiento de su madre"
              }
            },
            {
              "type": "dropdown",
              "name": "madre_con_vida",
              "title": {
                "es": "¿Su madre aún se encuentra con vida?"
              },
              "isRequired": true,
              "choices": [
                {
                  "value": "Si",
                  "text": {
                    "es": "Si"
                  }
                },
                {
                  "value": "No",
                  "text": {
                    "es": "No"
                  }
                },
                {
                  "value": "No Conoció a su madre",
                  "text": {
                    "es": "No conoció a su madre"
                  }
                }
              ]
            },
            {
              "type": "panel",
              "name": "panel_madre_con_vida",
              "visibleIf": "{madre_con_vida} = 'Si'",
              "elements": [
                {
                  "type": "text",
                  "name": "Lugar_residencia_actual_madre",
                  "title": {
                    "es": "Lugar de residencia actual"
                  },
                  "description": "Indique en qué país vive actualmente su madre"
                },
                {
                  "type": "text",
                  "name": "Estatus_migratorio_actual_madre",
                  "title": {
                    "es": "Estatus migratorio actual"
                  },
                  "description": "En caso de que su madre viva en los Estados Unidos o en otro país, por favor indique su estatus migratorio"
                }
              ]
            },
            {
              "type": "panel",
              "name": "panel_madre_defuncion",
              "visibleIf": "{madre_con_vida} = 'No'",
              "elements": [
                {
                  "type": "text",
                  "name": "Fecha_defuncion_madre",
                  "title": {
                    "es": "Fecha estimada defunción de la madre"
                  },
                  "inputType": "date"
                },
                {
                  "type": "comment",
                  "name": "Causa_fallecimiento_madre",
                  "title": {
                    "es": "Causa de fallecimiento de la madre"
                  }
                }
              ]
            }
          ]
        },
        {
          "type": "boolean",
          "name": "hermanos_titular",
          "title": {
            "es": "¿Tiene hermanos?"
          },
          "description": "Pueden ser hermanos de padre y madre o medios hermanos",
          "isRequired": true
        },
        {
          "type": "panel",
          "name": "panel_hermanos",
          "visibleIf": "{hermanos_titular} = true",
          "title": {
            "es": "DATOS DE HERMANOS"
          },
          "state": "expanded",
          "elements": [
            {
              "type": "matrixdynamic",
              "name": "datos_hermanos",
              "title": {
                "es": "INFORMACIÓN"
              },
              "description": "Si viven en EEUU u otro país, por favor escriba el estatus migratorio ",
              "isRequired": true,
              "columns": [
                {
                  "name": "nombre hermano",
                  "title": {
                    "es": "Nombre completo"
                  },
                  "cellType": "text"
                },
                {
                  "name": "Lugar de Nacimiento hermano",
                  "title": {
                    "es": "Lugar de nacimiento"
                  }
                },
                {
                  "name": "Pais de residencia actual hermano",
                  "title": {
                    "es": "País de residencia actual "
                  }
                },
                {
                  "name": "Estatus migratorio actual hermano",
                  "title": {
                    "es": "Estatus migratorio actual "
                  }
                }
              ],
              "choices": [
                1,
                2,
                3,
                4,
                5
              ],
              "cellType": "text",
              "rowCount": 1,
              "maxRowCount": 10,
              "confirmDelete": true,
              "addRowText": {
                "es": "Agregar una fila"
              },
              "removeRowText": {
                "es": "Eliminar una fila"
              }
            },
            {
              "type": "comment",
              "name": "Observaciones_hermanos",
              "title": {
                "es": "Observaciones "
              },
              "description": {
                "es": "En este campo puede colocar las observaciones adicionales que desee realizar sobre sus hermanos."
              }
            }
          ]
        },
        {
          "type": "dropdown",
          "name": "Estado_civil",
          "title": {
            "default": "Estado Civil",
            "es": "Estado civil"
          },
          "isRequired": true,
          "choices": [
            "Soltero/a",
            "Casado/a",
            "Unión libre",
            "Divorciado/a",
            "Separad/a"
          ]
        },
        {
          "type": "panel",
          "name": "panel_datos_pareja",
          "visibleIf": "{Estado_civil} = 'Casado/a'",
          "title": {
            "es": "DATOS DE CONYUGUE"
          },
          "elements": [
            {
              "type": "text",
              "name": "nombre_pareja",
              "title": {
                "es": "Nombre completo"
              },
              "isRequired": true
            },
            {
              "type": "text",
              "name": "Fecha_nacimiento_pareja",
              "title": {
                "es": "Fecha de nacimiento "
              },
              "isRequired": true,
              "inputType": "date"
            },
            {
              "type": "text",
              "name": "lugar_nacimiento_conyugue",
              "title": {
                "es": "Lugar de nacimiento"
              },
              "description": {
                "es": "Indique en qué país/ciudad o colonia nació su pareja "
              }
            },
            {
              "type": "text",
              "name": "Lugar_residencia_pareja",
              "title": {
                "es": "Lugar de residencia actual"
              },
              "description": {
                "default": "Indique en qué país vive actualmente su madre",
                "es": "Indique en qué país/ciudad o colonia vive actualmente su pareja actualmente"
              },
              "isRequired": true
            },
            {
              "type": "text",
              "name": "nombre_padre_conyugue",
              "title": {
                "es": "Nombre completo del padre"
              }
            },
            {
              "type": "text",
              "name": "nombre_madre_conyugue",
              "title": {
                "es": "Nombre completo de la madre"
              }
            },
            {
              "type": "dropdown",
              "name": "Casados_legalmente_pregunta",
              "title": {
                "es": "¿Están casados legalmente?"
              },
              "isRequired": true,
              "choices": [
                {
                  "value": "SI, tengo el registro o certificado en mi país de origen o en Estados Unidos.",
                  "text": {
                    "es": "Sí, tengo el registro o certificado en mi país de origen o en EE.UU."
                  }
                },
                {
                  "value": "NO",
                  "text": {
                    "es": "NO"
                  }
                },
                {
                  "value": "NO, pero tenemos Sociedad Conyugal vigente registrada en nuestro país de origen",
                  "text": {
                    "es": "NO, pero tenemos sociedad conyugal vigente registrada en nuestro país de origen"
                  }
                },
                {
                  "value": "NO, estamos en proceso de casarnos legalmente en EU y tenemos Licencia",
                  "text": {
                    "es": "NO, estamos en proceso de casarnos legalmente en EE.UU. y tenemos licencia"
                  }
                },
                {
                  "value": "No, estamos en proceso de casarnos legalmente en EU y NO tenemos Licencia",
                  "text": {
                    "es": "No, estamos en proceso de casarnos legalmente en EE.UU. y No tenemos licencia"
                  }
                }
              ]
            },
            {
              "type": "text",
              "name": "Fecha_casamiento",
              "visibleIf": "{Casados_legalmente_pregunta} = 'SI, tengo el registro o certificado en mi país de origen o en Estados Unidos.'",
              "title": {
                "es": "Indique la fecha en la que se casaron"
              },
              "inputType": "date"
            },
            {
              "type": "text",
              "name": "Lugar_casamiento",
              "visibleIf": "{Casados_legalmente_pregunta} = 'SI, tengo el registro o certificado en mi país de origen o en Estados Unidos.'",
              "title": {
                "es": "Indique país, departamento, estado, ciudad donde se casaron"
              }
            },
            {
              "type": "panel",
              "name": "panelInfoDemograficaConyugue",
              "title": {
                "es": "INFORMACIÓN DEMOGRAFICA"
              },
              "state": "expanded",
              "elements": [
                {
                  "type": "dropdown",
                  "name": "orientacionSexualConyugue",
                  "title": {
                    "default": "Orientación Sexual",
                    "es": "Orientación sexual"
                  },
                  "isRequired": true,
                  "choices": [
                    "Heterosexual",
                    "Homosexual",
                    "Bisexual"
                  ]
                },
                {
                  "type": "text",
                  "name": "Identidad_genero_conyugue",
                  "title": {
                    "es": "Identidad de genero"
                  }
                },
                {
                  "type": "dropdown",
                  "name": "grupo_racial_conyugue",
                  "title": {
                    "default": "¿Pertenece a Alguno de estos Grupos Raciales?",
                    "es": "¿Pertenece a alguno de estos grupos raciales?"
                  },
                  "isRequired": true,
                  "choices": [
                    {
                      "value": "Afrodescendiente",
                      "text": {
                        "es": "Afrodescendiente"
                      }
                    },
                    {
                      "value": "Latino/Hispano",
                      "text": {
                        "es": "Latino/Hispano"
                      }
                    },
                    {
                      "value": "Asiático",
                      "text": {
                        "es": "Asiático"
                      }
                    },
                    {
                      "value": "Comunidad Indígena",
                      "text": {
                        "es": "Comunidad Indígena"
                      }
                    },
                    {
                      "value": "Cuacásico",
                      "text": {
                        "es": "Cuacásico"
                      }
                    }
                  ],
                  "showOtherItem": true,
                  "showNoneItem": true
                },
                {
                  "type": "dropdown",
                  "name": "religion_conyugue",
                  "title": "¿Pertenece a alguna de estas religiones o cultos?",
                  "isRequired": true,
                  "choices": [
                    {
                      "value": "Cristianismo",
                      "text": {
                        "es": "Cristianismo"
                      }
                    },
                    {
                      "value": "Judaísmo",
                      "text": {
                        "es": "Judaísmo"
                      }
                    },
                    {
                      "value": "Hinduismo",
                      "text": {
                        "es": "Hinduismo"
                      }
                    },
                    {
                      "value": "Islam",
                      "text": {
                        "es": "Islam"
                      }
                    },
                    {
                      "value": "Budismo",
                      "text": {
                        "es": "Budismo"
                      }
                    }
                  ],
                  "showOtherItem": true,
                  "showNoneItem": true
                }
              ]
            },
            {
              "type": "boolean",
              "name": "ingreso_antes_a_EEUU_pareja",
              "title": {
                "es": "¿Había su pareja ingresado o visitado antes los EE.UU.?"
              },
              "isRequired": true
            },
            {
              "type": "matrixdynamic",
              "name": "visitas_anteriores_a_eeuu_pareja",
              "visibleIf": "{ingreso_antes_a_EEUU_pareja} = true",
              "title": {
                "default": "REGISTRO DE VISITAS ANTERIORES A EEUU",
                "es": "REGISTRO DE VISITAS ANTERIORES A EE.UU."
              },
              "isRequired": true,
              "columns": [
                {
                  "name": "Fecha de Ingreso pareja",
                  "title": {
                    "es": "Fecha de ingreso"
                  },
                  "cellType": "text",
                  "inputType": "date"
                },
                {
                  "name": "Lugar de Ingreso pareja",
                  "title": {
                    "es": "Lugar de ingreso"
                  }
                },
                {
                  "name": "Fecha de Salida pareja",
                  "title": {
                    "es": "Fecha de salida"
                  },
                  "cellType": "text",
                  "inputType": "date"
                },
                {
                  "name": "Lugar de Salida pareja",
                  "title": {
                    "es": "Lugar de salida"
                  }
                },
                {
                  "name": "Estatus Migratorio pareja",
                  "title": {
                    "es": "Estatus migratorio"
                  }
                }
              ],
              "choices": [
                1,
                2,
                3,
                4,
                5
              ],
              "cellType": "text",
              "rowCount": 1,
              "maxRowCount": 10,
              "confirmDelete": true,
              "addRowText": "Agregar una fila",
              "removeRowText": "Eliminar una fila"
            },
            {
              "type": "text",
              "name": "ultima_fecha_ingresoaEEUU_conyugue",
              "title": {
                "es": "Última fecha de último ingreso a EE.UU."
              },
              "description": "Indique la fecha en la que ingresó a EEUU y tomó la decisión de radicarse",
              "inputType": "date"
            },
            {
              "type": "text",
              "name": "lugar_fecha_ingresoaEEUU_conyugue",
              "startWithNewLine": false,
              "title": {
                "es": "Lugar de último ingreso a EE.UU."
              }
            }
          ]
        },
        {
          "type": "boolean",
          "name": "Tiene_hijos",
          "title": {
            "es": "¿Tiene hijos?"
          },
          "isRequired": true
        },
        {
          "type": "panel",
          "name": "panel_hijos",
          "visibleIf": "{Tiene_hijos}=true",
          "title": {
            "es": "DATOS DE HIJOS"
          },
          "elements": [
            {
              "type": "paneldynamic",
              "name": "datos_hijos",
              "title": {
                "es": "Datos de hijo/a"
              },
              "templateElements": [
                {
                  "type": "text",
                  "name": "Nombre_hijo",
                  "title": {
                    "es": "Nombre completo "
                  },
                  "isRequired": true
                },
                {
                  "type": "text",
                  "name": "Fecha_nacimiento_hijo",
                  "title": {
                    "es": "Fecha de nacimiento"
                  },
                  "isRequired": true,
                  "inputType": "date"
                },
                {
                  "type": "text",
                  "name": "Lugar_nacimiento_hijo",
                  "title": {
                    "es": "Lugar de nacimiento "
                  },
                  "description": {
                    "es": "Indique en qué país/ciudad nació su hijo/a"
                  },
                  "isRequired": true
                },
                {
                  "type": "text",
                  "name": "Lugar_residencia_hijo",
                  "title": {
                    "es": "Lugar donde vive actualmente "
                  },
                  "description": {
                    "es": "Indique en qué país/ciudad o colonia vive su hijo/a actualmente"
                  },
                  "isRequired": true
                },
                {
                  "type": "text",
                  "name": "numero_pasaporte_hijo",
                  "title": {
                    "es": "Número de pasaporte"
                  }
                },
                {
                  "type": "text",
                  "name": "Estatus_migratorio_hijo",
                  "startWithNewLine": false,
                  "title": {
                    "es": "Estatus migratorio actual"
                  }
                },
                {
                  "type": "boolean",
                  "name": "Incluision_hijo_en_proceso",
                  "title": {
                    "es": "¿Desea incluir este/a hijo/a en su solicitud?"
                  },
                  "isRequired": true
                }
              ],
              "templateTitle": "Hijo/a No. {panelIndex} ",
              "panelCount": 1,
              "minPanelCount": 1,
              "panelsState": "firstExpanded",
              "panelAddText": "Añadir nuevo hijo",
              "panelRemoveText": "Eliminar registro"
            }
          ]
        }
      ]
    },
    {
      "name": "informacion_migratoria",
      "title": "INFORMACIÓN MIGRATORIA",
      "navigationTitle": "4. Información Migratoria",
      "elements": [
        {
          "type": "panel",
          "name": "panel_informacion_migratoria",
          "elements": [
            {
              "type": "text",
              "name": "Fecha_salida_pais_origen",
              "title": {
                "es": "Fecha de salida de país donde vivía anteriormente"
              },
              "description": {
                "default": "Indique en qué fecha salió de su país al momento de tomar la decisión de radicarse en EEUU",
                "es": "Indique en qué fecha salió del país al momento de tomar la decisión de vivir en los EEUU"
              },
              "inputType": "date"
            },
            {
              "type": "comment",
              "name": "Lugar_salida_pais_nacimiento",
              "title": {
                "es": "Lugar de salida de país donde vivía anteriormente"
              },
              "description": {
                "default": "Indique cómo y por donde salió de su país al momento de tomar la decisión de radicarse en EEUU",
                "es": "Indique cómo y por donde salió del país al momento de tomar la decisión de vivir en los EEUU"
              }
            },
            {
              "type": "boolean",
              "name": "salida_relacion_llegada_EEUU",
              "title": {
                "es": "¿La salida de su país de origen está relacionada con su última llegada a EE.UU.?"
              },
              "isRequired": true
            },
            {
              "type": "text",
              "name": "ultima_fecha_ingreso_EEUU",
              "title": {
                "es": "Última fecha de ingreso a EE.UU."
              },
              "description": "Indique la fecha en la que ingresó a EEUU y tomó la decisión de radicarse",
              "inputType": "date"
            },
            {
              "type": "boolean",
              "name": "ultimo_ingreso_frontera_sin_visa",
              "startWithNewLine": false,
              "title": {
                "es": "¿Fue su último ingreso a EE.UU. por frontera y sin visa?"
              },
              "isRequired": true
            },
            {
              "type": "comment",
              "name": "entrevista_miedo_creíble_frontera",
              "visibleIf": "{ultimo_ingreso_frontera_sin_visa}=true",
              "title": {
                "es": "¿Le hicieron entrevista de miedo creíble en la frontera?"
              },
              "description": "Detalle qué le preguntó o explicó el oficial de migración al dejarle ingresar en frontera"
            }
          ]
        },
        {
          "type": "panel",
          "name": "panel_registro_visas_EEUU",
          "elements": [
            {
              "type": "boolean",
              "name": "pregunta_registro_visas_EEUU",
              "title": {
                "es": "¿Actualmente tiene o ha tenido alguna vez una visa para ingresar a los EE.UU.?"
              },
              "isRequired": true
            },
            {
              "type": "matrixdynamic",
              "name": "tabla_registro_visas_EEUU",
              "visibleIf": "{pregunta_registro_visas_EEUU} = true",
              "title": {
                "es": "REGISTRO DE VISAS ESTADOUNIDENSES"
              },
              "isRequired": true,
              "columns": [
                {
                  "name": "Tipo de Visa",
                  "title": {
                    "es": "Tipo de visa"
                  },
                  "cellType": "text"
                },
                {
                  "name": "Fecha de Expedición",
                  "title": {
                    "es": "Fecha de expedición"
                  },
                  "cellType": "text",
                  "inputType": "date"
                },
                {
                  "name": "Fecha de Vencimiento",
                  "title": {
                    "es": "Fecha de vencimiento"
                  },
                  "cellType": "text",
                  "inputType": "date"
                }
              ],
              "choices": [
                1,
                2,
                3,
                4,
                5
              ],
              "rowCount": 1,
              "maxRowCount": 10,
              "confirmDelete": true,
              "addRowText": "Agregar una fila",
              "removeRowText": "Eliminar una fila"
            }
          ]
        },
        {
          "type": "panel",
          "name": "panel_registro_visitas_EEUU",
          "elements": [
            {
              "type": "boolean",
              "name": "ingreso_antes_EEUU",
              "title": {
                "es": "¿Había ingresado o visitado antes los EE.UU.?"
              },
              "isRequired": true
            },
            {
              "type": "matrixdynamic",
              "name": "tabla_registro_visitas_anteriores EEUU",
              "visibleIf": "{ingreso_antes_EEUU}=true",
              "title": "REGISTRO DE VISITAS ANTERIORES A EEUU",
              "isRequired": true,
              "columns": [
                {
                  "name": "Fecha de Ingreso",
                  "title": {
                    "es": "Fecha de ingreso"
                  },
                  "cellType": "text",
                  "inputType": "date"
                },
                {
                  "name": "Lugar de Ingreso",
                  "title": {
                    "es": "Lugar de ingreso"
                  }
                },
                {
                  "name": "Fecha de Salida",
                  "title": {
                    "es": "Fecha de salida"
                  },
                  "cellType": "text",
                  "inputType": "date"
                },
                {
                  "name": "Lugar de Salida",
                  "title": {
                    "es": "Lugar de salida"
                  }
                },
                {
                  "name": "Estatus Migratorio",
                  "title": {
                    "es": "Estatus migratorio"
                  }
                }
              ],
              "choices": [
                1,
                2,
                3,
                4,
                5
              ],
              "cellType": "text",
              "rowCount": 1,
              "maxRowCount": 10,
              "confirmDelete": true,
              "addRowText": "Agregar una fila",
              "removeRowText": "Eliminar una fila"
            }
          ]
        },
        {
          "type": "panel",
          "name": "panel_registro_residencia_otros_paises",
          "elements": [
            {
              "type": "boolean",
              "name": "otros_paises_residencia",
              "title": {
                "es": "¿Ha vivido en otros países además de su país de origen o EE.UU.?"
              },
              "isRequired": true,
              "labelFalse": {
                "es": "No"
              }
            },
            {
              "type": "matrixdynamic",
              "name": "tabla_registro_residencias_otros_paises",
              "visibleIf": "{otros_paises_residencia}=true",
              "title": {
                "es": "REGISTRO DE RESIDENCIA EN OTROS PAISES"
              },
              "isRequired": true,
              "columns": [
                {
                  "name": "Pais de Residencia",
                  "title": {
                    "es": "País y ciudad de residencia"
                  }
                },
                {
                  "name": "Fecha de Entrada",
                  "title": {
                    "es": "Fecha de entrada"
                  },
                  "cellType": "text",
                  "inputType": "date"
                },
                {
                  "name": "Fecha de Salida",
                  "title": {
                    "es": "Fecha de salida"
                  },
                  "cellType": "text",
                  "inputType": "date"
                },
                {
                  "name": "Estatus Migratorio",
                  "title": {
                    "es": "Estatus migratorio"
                  }
                }
              ],
              "choices": [
                1,
                2,
                3,
                4,
                5
              ],
              "cellType": "text",
              "rowCount": 1,
              "maxRowCount": 10,
              "confirmDelete": true,
              "addRowText": "Agregar una fila",
              "removeRowText": "Eliminar una fila"
            }
          ]
        },
        {
          "type": "panel",
          "name": "panel_registro_visitas_otrosPaises_residencia_EEUU",
          "elements": [
            {
              "type": "boolean",
              "name": "visitado_otros_paises_viviendo_en_EEUU",
              "title": {
                "es": "¿Ha visitado otros países mientras ha estado viviendo en los EE.UU.?"
              },
              "isRequired": true
            },
            {
              "type": "matrixdynamic",
              "name": "tabla_registro_visitas_otros_paises_residiendo _EEUU",
              "visibleIf": "{visitado_otros_paises_viviendo_en_EEUU}=true",
              "title": {
                "es": "REGISTRO DE VISITAS A OTROS PAISES MIENTRAS HA ESTADO VIVIENDO EN EE.UU."
              },
              "description": "Detalle las salidas del país, desde el año 2014 hasta la actualidad.",
              "isRequired": true,
              "columns": [
                {
                  "name": "País de Visita",
                  "title": {
                    "es": "País y ciudad de visita"
                  }
                },
                {
                  "name": "Fecha de Salida de EEUU",
                  "title": {
                    "es": "Fecha de salida de EE.UU."
                  },
                  "cellType": "text",
                  "inputType": "date"
                },
                {
                  "name": "Fecha de Ingreso a EEUU",
                  "title": {
                    "es": "Fecha de ingreso a EE.UU."
                  },
                  "cellType": "text",
                  "inputType": "date"
                }
              ],
              "choices": [
                1,
                2,
                3,
                4,
                5
              ],
              "cellType": "text",
              "rowCount": 1,
              "maxRowCount": 10,
              "confirmDelete": true,
              "addRowText": "Agregar una fila",
              "removeRowText": "Eliminar una fila"
            }
          ]
        },
        {
          "type": "panel",
          "name": "panel_registro_visitas_otrosPaises_residencia_pais_origen",
          "elements": [
            {
              "type": "boolean",
              "name": "visitado_otros_paises_viviendo_en_pais_origen",
              "title": {
                "es": "¿Ha visitado otros países mientras ha estado viviendo en su país de origen?"
              },
              "isRequired": true
            },
            {
              "type": "matrixdynamic",
              "name": "tabla_registro_visitas_otros_paises_residiendo _pais_origen",
              "visibleIf": "{visitado_otros_paises_viviendo_en_pais_origen}=true",
              "title": {
                "es": "REGISTRO DE VISITAS A OTROS PAISES MIENTRAS HA ESTADO VIVIENDO EN PAÍS DE ORIGEN"
              },
              "description": "Detalle las salidas del país, desde el año 2014 hasta la actualidad.",
              "isRequired": true,
              "columns": [
                {
                  "name": "País de Visita",
                  "title": {
                    "es": "País y ciudad de visita"
                  }
                },
                {
                  "name": "Fecha de Salida de PN",
                  "title": {
                    "es": "Fecha de salida de su país"
                  },
                  "cellType": "text",
                  "inputType": "date"
                },
                {
                  "name": "Fecha de Ingreso de PN",
                  "title": {
                    "es": "Fecha de ingreso a su país"
                  },
                  "cellType": "text",
                  "inputType": "date"
                }
              ],
              "choices": [
                1,
                2,
                3,
                4,
                5
              ],
              "cellType": "text",
              "rowCount": 1,
              "maxRowCount": 10,
              "confirmDelete": true,
              "addRowText": "Agregar una fila",
              "removeRowText": "Eliminar una fila"
            }
          ]
        }
      ]
    },
    {
      "name": "historial_direcciones",
      "title": "INFORMACIÓN DE HISTORIAL DE DIRECCIONES",
      "navigationTitle": "5. Historial de Direcciones",
      "elements": [
        {
          "type": "paneldynamic",
          "name": "panel_historial_direcciones",
          "state": "expanded",
          "title": {
            "es": "Historial de Direcciones"
          },
          "description": {
            "es": "Por Favor indique las últimas 5 direcciones en las que ha vivido, de la más reciente a la más antigua"
          },
          "templateElements": [
            {
              "type": "text",
              "name": "historial_direccion",
              "title": {
                "es": "Dirección "
              },
              "isRequired": true
            },
            {
              "type": "text",
              "name": "Zipcode_historial_direccion",
              "title": {
                "es": "Zip Code de dirección "
              }
            },
            {
              "type": "text",
              "name": "Pais_ciudad_historial_direccion",
              "title": {
                "es": "País y ciudad de dirección"
              }
            },
            {
              "type": "text",
              "name": "fecha_desde_historial_direccion",
              "title": {
                "es": "Fecha desde que estuvo viviendo en esta dirección"
              },
              "inputType": "date"
            },
            {
              "type": "text",
              "name": "fecha_hasta_historial_direccion",
              "startWithNewLine": false,
              "title": {
                "es": "Fecha hasta la que estuvo viviendo en esta dirección"
              },
              "inputType": "date"
            },
            {
              "type": "comment",
              "name": "motivo_historial_direccion",
              "title": {
                "es": "Motivo de mudanza o cambio de dirección"
              }
            }
          ],
          "templateTitle": "Dirección No. {panelIndex} ",
          "noEntriesText": {
            "es": "Aún no hay información.nHaga clic en el botón de abajo para agregar una nueva dirección."
          },
          "panelCount": 1,
          "minPanelCount": 1,
          "maxPanelCount": 6,
          "panelsState": "firstExpanded",
          "confirmDelete": true,
          "panelAddText": "Añadir Nueva Dirección",
          "panelRemoveText": "Eliminar Dirección"
        }
      ]
    },
    {
      "name": "informacion_academica",
      "title": "INFORMACIÓN ACADÉMICA ",
      "navigationTitle": "6. Información Académica ",
      "elements": [
        {
          "type": "paneldynamic",
          "name": "panel_historial_academico",
          "state": "expanded",
          "title": {
            "es": "Historial Académico"
          },
          "templateElements": [
            {
              "type": "dropdown",
              "name": "tipo_programa_academico",
              "title": {
                "es": "Tipo de programa académico "
              },
              "isRequired": true,
              "choices": [
                {
                  "value": "Item 1",
                  "text": "Doctorado"
                },
                {
                  "value": "Item 2",
                  "text": "Maestría"
                },
                {
                  "value": "Item 5",
                  "text": "Grado Universitario"
                },
                {
                  "value": "Item 6",
                  "text": "Nivel Técnico"
                },
                {
                  "value": "Item 7",
                  "text": "Secundaria"
                },
                {
                  "value": "Item 8",
                  "text": "Primaria"
                }
              ],
              "showOtherItem": true,
              "showNoneItem": true
            },
            {
              "type": "text",
              "name": "nombre_programa_academico",
              "title": {
                "es": "Nombre de programa académico "
              }
            },
            {
              "type": "text",
              "name": "nombre_institucion_academica",
              "title": {
                "es": "Nombre de institución académica"
              },
              "description": {
                "es": "Nombre de la Institución educativa donde realizó su programa académico "
              }
            },
            {
              "type": "text",
              "name": "direccion_institucion_academica",
              "title": {
                "es": "Dirección de institución académica"
              },
              "description": {
                "es": "País de la Institución educativa donde realizó su programa académico"
              }
            },
            {
              "type": "text",
              "name": "lugar_institucion_cademica",
              "title": {
                "es": "Lugar donde se encuentra ubicada la institución académica"
              },
              "description": {
                "es": "Indique en qué país y ciudad se encuentra la institución académica "
              }
            },
            {
              "type": "text",
              "name": "fecha_inicio_programa_academico",
              "title": {
                "es": "Fecha inicio programa académico "
              },
              "inputType": "date"
            },
            {
              "type": "text",
              "name": "Fecha_finalizacion_programa_academico",
              "startWithNewLine": false,
              "title": {
                "es": "Fecha finalización programa académico"
              },
              "inputType": "date"
            }
          ],
          "templateTitle": "Estudio No. {panelIndex} ",
          "noEntriesText": {
            "es": "Aún no hay información.nHaga clic en el botón de abajo para agregar una nuevo estudio."
          },
          "panelCount": 1,
          "panelsState": "firstExpanded",
          "confirmDelete": true,
          "panelAddText": "Añadir Nuevo Estudio",
          "panelRemoveText": "Eliminar Estudio"
        }
      ]
    },
    {
      "name": "informacion_laboral",
      "title": "INFORMACIÓN LABORAL",
      "navigationTitle": "7. Información Laboral",
      "elements": [
        {
          "type": "paneldynamic",
          "name": "Historial_laboral",
          "state": "expanded",
          "title": {
            "es": "Historial Laboral"
          },
          "description": {
            "es": "Por favor ingrese su experiencia laboral de los últimos 5 años. Tenga en cuenta que solo puede relacionar las experiencias laborales donde usted haya laborado legalmente o con permiso de trabajo tanto dentro como fuera de Estados Unidos."
          },
          "templateElements": [
            {
              "type": "text",
              "name": "Nombre_empresa",
              "title": {
                "es": "Nombre de empresa"
              },
              "isRequired": true
            },
            {
              "type": "text",
              "name": "Direccion_empresa",
              "title": {
                "es": "Dirección de empresa"
              }
            },
            {
              "type": "text",
              "name": "lugar_labor",
              "title": {
                "es": "Lugar donde laboró"
              },
              "description": {
                "es": "Indique en qué país y ciudad se encuentra la empresa donde laboró"
              }
            },
            {
              "type": "text",
              "name": "cargo_empresa",
              "title": {
                "es": "Cargo en la empresa "
              }
            },
            {
              "type": "text",
              "name": "Fecha_inicio_labor_empresa",
              "title": {
                "es": "Fecha inicio de labor en empresa"
              },
              "inputType": "date"
            },
            {
              "type": "text",
              "name": "Fecha_finalizacion_labor_empresa",
              "startWithNewLine": false,
              "title": {
                "es": "Fecha finalización de labor en empresa"
              },
              "inputType": "date"
            }
          ],
          "templateTitle": {
            "es": "Empresa No. {panelIndex} "
          },
          "noEntriesText": {
            "es": "Aún no hay información.nHaga clic en el botón de abajo para agregar una nueva empresa."
          },
          "panelCount": 1,
          "panelsState": "firstExpanded",
          "confirmDelete": true,
          "panelAddText": "Añadir Nueva Empresa",
          "panelRemoveText": {
            "default": "Eliminar Estudio",
            "es": "Eliminar Empresa"
          }
        }
      ]
    },
    {
      "name": "informacion_adicional",
      "title": "INFORMACIÓN ADICIONAL ",
      "description": {
        "es": "En esta sección se solicitará información adicional para la solicitud de asilo "
      },
      "navigationTitle": "8. Información Adicional",
      "elements": [
        {
          "type": "tagbox",
          "name": "causales_peticion_asilo",
          "title": {
            "es": "Seleccione la opción o las opciones que mejor describan los causales que le hacen elegible para solicitar asilo en los EE.UU."
          },
          "isRequired": true,
          "choices": [
            {
              "value": "Item 1",
              "text": {
                "es": "Persecución por raza, orientación sexual, nacionalidad, religión, opinión política o por pertenecer a un grupo social determinado"
              }
            },
            {
              "value": "Item 2",
              "text": {
                "es": "Pertenecer a la comunidad LGBTIQ"
              }
            },
            {
              "value": "Item 3",
              "text": {
                "es": "Ser propietario de fincas o extensiones de tierras"
              }
            },
            {
              "value": "Item 4",
              "text": {
                "es": "Ser o haber sido funcionario público o tener familia que haya estado involucrada en cargos públicos (incluidos policías y militares) funcionarios de oenegés, contratistas del Estado."
              }
            },
            {
              "value": "Item 5",
              "text": {
                "es": "Ha trabajado en una ONG"
              }
            },
            {
              "value": "Item 6",
              "text": {
                "es": "Ha sido victima de violencia estatal"
              }
            },
            {
              "value": "Item 7",
              "text": {
                "es": "Ha vivido en zonas de alto riesgo o zonas de guerra"
              }
            },
            {
              "value": "Item 8",
              "text": {
                "es": "Fue víctima del conflicto armado (o víctimas recientes del conflicto armado)"
              }
            },
            {
              "value": "Item 9",
              "text": {
                "es": "Ha sido victima de violencia sexual"
              }
            },
            {
              "value": "Item 10",
              "text": {
                "es": "Ha sido víctima de crímenes de odio por raza"
              }
            },
            {
              "value": "Item 11",
              "text": {
                "es": "El especialista asignado a mi caso definirá la causal de mi solicitud de asilo"
              }
            }
          ],
          "showOtherItem": true
        },
        {
          "type": "comment",
          "name": "detalle_vida_cotidiana",
          "title": {
            "es": "Detalle brevemente su vida cotidiana en su país de origen o donde residía anteriormente, antes de llegar a EE.UU."
          },
          "isRequired": true
        },
        {
          "type": "comment",
          "name": "causal_abandono_pais_origen",
          "title": {
            "es": "¿Cuál fue el evento o incidente específico que provocó la persecución y lo obligó a abandonar su país de origen o donde residía anteriormente, y llegar a los EE.UU.?"
          }
        },
        {
          "type": "boolean",
          "name": "incidente_delincuencia_comun",
          "title": {
            "es": "¿Ha sido víctima de algún incidente de delincuencia común desde el año 2014 hasta la actualidad? "
          },
          "description": {
            "es": "Por ejemplo: robo, extorsión, secuestro, amenazas, etc."
          },
          "isRequired": true
        },
        {
          "type": "boolean",
          "name": "familiar_politico",
          "title": {
            "es": "¿Tiene usted, algún familiar o amigo cercano que tenga algún tipo de afiliación o vínculo con un partido político?"
          },
          "isRequired": true
        },
        {
          "type": "boolean",
          "name": "familiar_solicitando_asilo_EEUU",
          "startWithNewLine": false,
          "title": {
            "es": "¿Tiene usted algún familiar solicitando asilo en EEUU?"
          },
          "isRequired": true
        },
        {
          "type": "boolean",
          "name": "habilidad_oral",
          "title": {
            "es": "¿Se considera hábil para hablar en público?"
          },
          "isRequired": true
        },
        {
          "type": "boolean",
          "name": "pregunta_condicion_medica",
          "startWithNewLine": false,
          "title": {
            "es": "¿Tiene alguna condición médica que debamos conocer?"
          },
          "isRequired": true
        },
        {
          "type": "comment",
          "name": "description_condicion_medica",
          "visibleIf": "{pregunta_condicion_medica}=true",
          "title": {
            "es": "Por favor, describa su condición medica"
          }
        }
      ]
    }
  ],
  "sendResultOnPageNext": true,
  "showPageNumbers": true,
  "showQuestionNumbers": "off",
  "showProgressBar": "auto",
  "progressBarShowPageTitles": true,
  "progressBarShowPageNumbers": true,
  "tocLocation": "right",
  "storeOthersAsComment": false,
  "clearInvisibleValues": "none",
  "textUpdateMode": "onTyping",
  "autoGrowComment": true,
  "startSurveyText": "Comenzar",
  "completeText": "Enviar",
  "editText": "Editar",
  "firstPageIsStarted": true,
  "widthMode": "responsive",
  "width": "1200px"
};

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const url_Radicado = urlParams.get('radicado');
console.log('urlRadicado ' + url_Radicado);

function alertResults(sender) {
  const results = JSON.stringify(sender.data);
  alert(results);
  console.log(results)
}

const survey = new Survey.Model(surveyJson);
document.addEventListener('DOMContentLoaded', function () {
  survey.setVariable('radicadoVar', url_Radicado);
  survey.render(document.getElementById('surveyContainer'));
    survey.onCompleting.add(function (sender, options)
  {
      options.allowComplete = confirm('¿Estás seguro que deseas enviar el formulario?');
  });
  survey.onComplete.add(alertResults);
});
