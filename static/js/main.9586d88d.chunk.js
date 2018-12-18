(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,a,t){e.exports=t(273)},107:function(e,a,t){},273:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(25),s=t.n(l),c=(t(107),t(27)),i=t(28),o=t(30),m=t(29),d=t(31),u=t(43),E=t(22),h=t(11),g=t.n(h),C=t(17),b=t(33),p=t.n(b),T=t(18),A=t.n(T),v=t(19),D=t.n(v),f=t(23),N=t.n(f),I=t(24),y=t.n(I),L=t(5),x=t.n(L),F=t(2),j=t.n(F),P=t(7),Y=t.n(P),S=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).data=Object(E.a)({},t.props.data.shared,t.props.data.cmi,{costPerIMIHour:25e3,TADLPContractCost:0,devCostPerLearner:0,GARLaborRate:18.03,GARTime:0,GARCost:0,GARCostPerLearner:0,FY14ALMSCost:1.86,FTFieldingCost:0}),t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"calcAndSetData",value:function(){var e=Object(E.a)({},this.data,this.props.data.shared,this.props.data.cmi),a={TADLPContractCost:e.finishedIMIHours*e.costPerIMIHour,devCostPerLearner:e.finishedIMIHours*e.costPerIMIHour/e.learnerTargetAudience,GARTime:1.6*e.contractIMIHours,GARCost:1.6*e.contractIMIHours*e.GARLaborRate,GARCostPerLearner:1.6*e.contractIMIHours*e.GARLaborRate/e.learnerTargetAudience,FTFieldingCost:e.FY14ALMSCost*e.contentPackages,ImplementationCostPerLearner:e.FY14ALMSCost*e.contentPackages/e.learnerTargetAudience,TotalCost:e.finishedIMIHours*e.costPerIMIHour+1.6*e.contractIMIHours*e.GARLaborRate,TotalCostPerLearner:e.finishedIMIHours*e.costPerIMIHour/e.learnerTargetAudience+1.6*e.contractIMIHours*e.GARLaborRate/e.learnerTargetAudience+e.FY14ALMSCost*e.contentPackages/e.learnerTargetAudience};this.data=Object(E.a)({},e,a)}},{key:"render",value:function(){var e=this.props.classes;return this.calcAndSetData(),r.a.createElement(n.Fragment,null,r.a.createElement(Y.a,{variant:"h4",gutterBottom:!0},"Computer-Managed Instruction (CMI)"),r.a.createElement(Y.a,{variant:"body1",gutterBottom:!0},"Distance learning. Content is auto-scoring, and the learner interacts with content with no instructor or classroom."),r.a.createElement(p.a,{className:e.divider}),r.a.createElement(Y.a,{variant:"h5",gutterBottom:!0},"Costs by ADDIE Stage"),r.a.createElement(g.a,{container:!0,spacing:8},r.a.createElement(g.a,{item:!0,xs:4},r.a.createElement(A.a,{className:e.card},r.a.createElement(D.a,null,r.a.createElement(Y.a,{variant:"h6",className:[e.addieTitle,e.addieA].join(" ")},"Analysis"),r.a.createElement(Y.a,{varient:"body1"},"Costs are fixed. Activities include job analysis and other tasks performed by an ISD without the need for automated tools.")))),r.a.createElement(g.a,{item:!0,xs:4},r.a.createElement(A.a,{className:e.card},r.a.createElement(D.a,null,r.a.createElement(Y.a,{variant:"h6",className:[e.addieTitle,e.addieD1].join(" ")},"Design"),r.a.createElement(Y.a,{variant:"body1"},"Costs are fixed. Activies include design of TLOs, ELOs, sequencing, etc., done during TDC.")))),r.a.createElement(g.a,{item:!0,xs:4},r.a.createElement(A.a,{className:e.card},r.a.createElement(D.a,null,r.a.createElement(Y.a,{variant:"h6",className:[e.addieTitle,e.addieD2].join(" ")},"Development"),r.a.createElement(N.a,null,r.a.createElement(y.a,null,r.a.createElement(x.a,null,r.a.createElement(j.a,null,"Finished IMI Hours"),r.a.createElement(j.a,{className:e.numberCell},this.data.finishedIMIHours)),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"Cost per IMI Hour"),r.a.createElement(j.a,{className:e.numberCell},"$",this.data.costPerIMIHour.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"Learner Target Audience Throughput"),r.a.createElement(j.a,{className:e.numberCell},this.data.learnerTargetAudience.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"TADLP Contract Cost"),r.a.createElement(j.a,{className:e.numberCell},"$",this.data.TADLPContractCost.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"Development Cost Per Learner"),r.a.createElement(j.a,{className:e.numberCell},"$",this.data.devCostPerLearner.toFixed(2)))))))),r.a.createElement(g.a,{item:!0,xs:4},r.a.createElement(A.a,{className:e.card},r.a.createElement(D.a,null,r.a.createElement(Y.a,{variant:"h6",className:[e.addieTitle,e.addieI].join(" ")},"Implementation"),r.a.createElement(N.a,null,r.a.createElement(y.a,null,r.a.createElement(x.a,null,r.a.createElement(j.a,null,"Impl. Br. GAR Labor Rate"),r.a.createElement(j.a,{className:e.numberCell},"$",this.data.GARLaborRate)),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"IMI Hours"),r.a.createElement(j.a,{className:e.numberCell},this.data.contractIMIHours)),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"Hours to Complete GAR"),r.a.createElement(j.a,{className:e.numberCell},this.data.GARTime.toFixed(0))),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"GAR Cost"),r.a.createElement(j.a,{className:e.numberCell},"$",this.data.GARCost.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"GAR Cost per Learner"),r.a.createElement(j.a,{className:e.numberCell},"$",this.data.GARCostPerLearner.toFixed(2))),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"ALMS Cost per Training Unit"),r.a.createElement(j.a,{className:e.numberCell},"$",this.data.FY14ALMSCost)),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"Content Packages"),r.a.createElement(j.a,{className:e.numberCell},this.data.contentPackages)),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"FT and Fielding Cost per Learner"),r.a.createElement(j.a,{className:e.numberCell},"$",this.data.FTFieldingCost.toFixed(2))),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"Implementation Cost per Learner"),r.a.createElement(j.a,{className:e.numberCell},"$",this.data.ImplementationCostPerLearner.toFixed(4)))))))),r.a.createElement(g.a,{item:!0,xs:4},r.a.createElement(A.a,{className:e.card},r.a.createElement(D.a,null,r.a.createElement(Y.a,{variant:"h6",className:[e.addieTitle,e.addieE].join(" ")},"Evaluation"),r.a.createElement(Y.a,{variant:"body1",gutterBottom:!0},"NOTE: Figures not yet implemented."),r.a.createElement(N.a,null,r.a.createElement(y.a,null,r.a.createElement(x.a,null,r.a.createElement(j.a,null,"Army Training Help Desk (ATHD)"),r.a.createElement(j.a,{className:e.numberCell},"-")),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"ATHD RightNow License Cost (for all Agents)"),r.a.createElement(j.a,{className:e.numberCell},"-")),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"TKT Hours"),r.a.createElement(j.a,{className:e.numberCell},"-")),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"DL DATR Costs"),r.a.createElement(j.a,{className:e.numberCell},"-")),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"Evaluation Cost per Learner"),r.a.createElement(j.a,{className:e.numberCell},"-"))))))),r.a.createElement(g.a,{item:!0,xs:4},r.a.createElement(A.a,{className:e.card},r.a.createElement(D.a,null,r.a.createElement(Y.a,{variant:"h6",className:[e.addieTitle,e.addieT].join(" ")},"Totals"),r.a.createElement(N.a,null,r.a.createElement(y.a,null,r.a.createElement(x.a,null,r.a.createElement(j.a,{className:[e.total,e.big].join(" ")},"Total Cost"),r.a.createElement(j.a,{numeric:!0,className:[e.numberCell,e.total,e.big].join(" ")},"$",this.data.TotalCost.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),r.a.createElement(x.a,null,r.a.createElement(j.a,{className:e.total},"Total Cost per Learner"),r.a.createElement(j.a,{numeric:!0,className:[e.total,e.numberCell].join(" ")},"$",this.data.TotalCostPerLearner.toFixed(2))),r.a.createElement(x.a,null,r.a.createElement(j.a,{className:e.total},"Total Cost per Learner if Rebuilt after 3 Years"),r.a.createElement(j.a,{numeric:!0,className:[e.total,e.numberCell].join(" ")},"$",(2*this.data.TotalCostPerLearner).toFixed(2))))))))))}}]),a}(n.Component),O=Object(C.withStyles)(function(e){return{divider:{marginTop:2*e.spacing.unit,marginBottom:2*e.spacing.unit},card:{minHeight:"350px"},addieTitle:{paddingBottom:e.spacing.unit,marginBottom:e.spacing.unit,borderBottom:"3px solid #4e89eb"},addieA:{borderColor:"#4dabf5"},addieD1:{borderColor:"#5393ff"},addieD2:{borderColor:"#2196f3"},addieI:{borderColor:"#2979ff"},addieE:{borderColor:"#1769aa"},addieT:{borderColor:"#ff5722"},total:{fontWeight:"bold"},big:{fontSize:"1rem"},numberCell:{textAlign:"right"}}})(S),B=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).data=Object(E.a)({},t.props.data.shared,t.props.data.cai,{totalTDYCost:0,instPer25Students:0,instTeaching40weeks1:0,instTeaching40weeks2:0,instTDY3Years:0,instAnnualCost:0,learnerTDYCost:0,instCostPerAnnualLearner:0,costOneClassroom:0}),t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"calcAndSetData",value:function(){var e=Object(E.a)({},this.data,this.props.data.shared,this.props.data.cai),a={instPer25Students:e.learnerTargetAudience/25,instTeaching40weeks1:e.learnerTargetAudience/25/20,instTeaching40weeks2:e.learnerTargetAudience/25/40,instTDY3Years:e.learnerTargetAudience/25/20/3,instAnnualCost:e.learnerTargetAudience/25/20/3*e.loadedAnnualInstructorCost,instCostPerAnnualLearner:e.learnerTargetAudience/25/20/3*e.loadedAnnualInstructorCost/e.learnerTargetAudience/3,costOneClassroom:e.learnerCostPerDay*e.TDYDays*e.classroomsRequired,implementationCostPerLearner:e.learnerTDYCost+e.learnerTargetAudience/25/20/3*e.loadedAnnualInstructorCost/e.learnerTargetAudience/3+e.learnerCostPerDay*e.TDYDays*e.classroomsRequired,totalCost:e.learnerTargetAudience/25/20/3*e.loadedAnnualInstructorCost+e.learnerTargetAudience*e.learnerTDYCost};this.data=Object(E.a)({},e,a)}},{key:"render",value:function(){var e=this.props.classes;return this.calcAndSetData(),r.a.createElement(n.Fragment,null,r.a.createElement(Y.a,{variant:"h4",gutterBottom:!0},"Computer-Assisted Instruction (CAI)"),r.a.createElement(Y.a,{variant:"body1",gutterBottom:!0},"Distributed learning. Content is scored by an instructor, and the learner and instructor are in different classrooms."),r.a.createElement(p.a,{className:e.divider}),r.a.createElement(Y.a,{variant:"h5",gutterBottom:!0},"Costs by ADDIE Stage"),r.a.createElement(g.a,{container:!0,spacing:8},r.a.createElement(g.a,{item:!0,xs:4},r.a.createElement(A.a,{className:e.card},r.a.createElement(D.a,null,r.a.createElement(Y.a,{variant:"h6",className:[e.addieTitle,e.addieA].join(" ")},"Analysis"),r.a.createElement(Y.a,{varient:"body1"},"Costs are fixed. Activities include job analysis and other tasks performed by an ISD without the need for automated tools.")))),r.a.createElement(g.a,{item:!0,xs:4},r.a.createElement(A.a,{className:e.card},r.a.createElement(D.a,null,r.a.createElement(Y.a,{variant:"h6",className:[e.addieTitle,e.addieD1].join(" ")},"Design"),r.a.createElement(Y.a,{variant:"body1"},"Costs are fixed. Activies include design of TLOs, ELOs, sequencing, etc., done during TDC.")))),r.a.createElement(g.a,{item:!0,xs:4},r.a.createElement(A.a,{className:e.card},r.a.createElement(D.a,null,r.a.createElement(Y.a,{variant:"h6",className:[e.addieTitle,e.addieD2].join(" ")},"Development"),r.a.createElement(Y.a,{variant:"body1"},"Instructor Content Hour (ICU) and Non-Instruction Content Hour (NICH) costs not computed.")))),r.a.createElement(g.a,{item:!0,xs:4},r.a.createElement(A.a,{className:e.card},r.a.createElement(D.a,null,r.a.createElement(Y.a,{variant:"h6",className:[e.addieTitle,e.addieI].join(" ")},"Implementation"),r.a.createElement(N.a,null,r.a.createElement(y.a,null,r.a.createElement(x.a,null,r.a.createElement(j.a,null,"Total Learner TDY Cost for Target Audience"),r.a.createElement(j.a,{className:e.numberCell},"$",this.data.totalTDYCost.toFixed(2))),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"# Instructors Required for Every 25 Students"),r.a.createElement(j.a,{className:e.numberCell},Math.round(this.data.instPer25Students).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"# Instructors Teaching 40 Weeks a Year (20 2-week classes)"),r.a.createElement(j.a,{className:e.numberCell},Math.round(this.data.instTeaching40weeks1).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"# Instructors Teaching 40 Weeks a Year (40 1-week classes)"),r.a.createElement(j.a,{className:e.numberCell},Math.round(this.data.instTeaching40weeks2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"# Instructors Needed for TDY Course if Spread Across 3 Years"),r.a.createElement(j.a,{className:e.numberCell},Math.round(this.data.instTDY3Years).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"Instructor Cost Annually"),r.a.createElement(j.a,{className:e.numberCell},"$",this.data.instAnnualCost.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"Learner TDY Cost per TDY"),r.a.createElement(j.a,{className:e.numberCell},"$",this.data.learnerTDYCost.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"Cost Per Annual Student for Instructor"),r.a.createElement(j.a,{className:e.numberCell},"$",this.data.instCostPerAnnualLearner.toFixed(2))),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"Cost of One Classroom Per Learner Per Course"),r.a.createElement(j.a,{className:e.numberCell},"$",this.data.costOneClassroom.toFixed(2))),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"Implementation Cost Per Learner"),r.a.createElement(j.a,{className:e.numberCell},"$",this.data.implementationCostPerLearner.toFixed(2)))))))),r.a.createElement(g.a,{item:!0,xs:4},r.a.createElement(A.a,{className:e.card},r.a.createElement(D.a,null,r.a.createElement(Y.a,{variant:"h6",className:[e.addieTitle,e.addieE].join(" ")},"Evaluation"),r.a.createElement(Y.a,{variant:"body1",gutterBottom:!0},"NOTE: Figures not yet implemented."),r.a.createElement(N.a,null,r.a.createElement(y.a,null,r.a.createElement(x.a,null,r.a.createElement(j.a,null,"Army Training Help Desk (ATHD)"),r.a.createElement(j.a,{className:e.numberCell},"-")),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"ATHD RightNow License Cost (for all Agents)"),r.a.createElement(j.a,{className:e.numberCell},"-")),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"TKT Hours"),r.a.createElement(j.a,{className:e.numberCell},"-")),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"Evaluation Cost per Learner"),r.a.createElement(j.a,{className:e.numberCell},"-"))))))),r.a.createElement(g.a,{item:!0,xs:4},r.a.createElement(A.a,{className:e.card},r.a.createElement(D.a,null,r.a.createElement(Y.a,{variant:"h6",className:[e.addieTitle,e.addieT].join(" ")},"Totals"),r.a.createElement(N.a,null,r.a.createElement(y.a,null,r.a.createElement(x.a,null,r.a.createElement(j.a,{className:[e.total,e.big].join(" ")},"Total Cost"),r.a.createElement(j.a,{numeric:!0,className:[e.numberCell,e.total,e.big].join(" ")},"$",this.data.totalCost.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),r.a.createElement(x.a,null,r.a.createElement(j.a,{className:e.total},"Total Cost per Learner"),r.a.createElement(j.a,{numeric:!0,className:[e.numberCell,e.total].join(" ")},"$",this.data.implementationCostPerLearner.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))))))))))}}]),a}(n.Component),k=Object(C.withStyles)(function(e){return{divider:{marginTop:2*e.spacing.unit,marginBottom:2*e.spacing.unit},card:{minHeight:"350px"},addieTitle:{paddingBottom:e.spacing.unit,marginBottom:e.spacing.unit,borderBottom:"3px solid #4e89eb"},addieA:{borderColor:"#4dabf5"},addieD1:{borderColor:"#5393ff"},addieD2:{borderColor:"#2196f3"},addieI:{borderColor:"#2979ff"},addieE:{borderColor:"#1769aa"},addieT:{borderColor:"#ff5722"},total:{fontWeight:"bold"},big:{fontSize:"1rem"},numberCell:{textAlign:"right"}}})(B),H=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).data=Object(E.a)({},t.props.data.shared,t.props.data.live,{totalTDYCost:0,instPer25Students:0,instTeaching40weeks1:0,instTeaching40weeks2:0,instTDY3Years:0,instAnnualCost:0,learnerTDYCost:0,instCostPerAnnualLearner:0,costOneClassroom:0}),t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"calcAndSetData",value:function(){var e=Object(E.a)({},this.data,this.props.data.shared,this.props.data.live),a={totalTDYCost:e.learnerTargetAudience*e.learnerTDYCost,instPer25Students:e.learnerTargetAudience/25,instTeaching40weeks1:e.learnerTargetAudience/25/20,instTeaching40weeks2:e.learnerTargetAudience/25/40,instTDY3Years:e.learnerTargetAudience/25/20/3,instAnnualCost:e.learnerTargetAudience/25/20/3*e.loadedAnnualInstructorCost,learnerTDYCost:e.TDYDays*e.TDYCostPerDay,instCostPerAnnualLearner:e.learnerTargetAudience/25/20/3*e.loadedAnnualInstructorCost/e.learnerTargetAudience/3,costOneClassroom:e.learnerCostPerDay*e.TDYDays*e.classroomsRequired,implementationCostPerLearner:e.TDYDays*e.TDYCostPerDay+e.learnerTargetAudience/25/20/3*e.loadedAnnualInstructorCost/e.learnerTargetAudience/3+e.learnerCostPerDay*e.TDYDays*e.classroomsRequired,totalCost:e.learnerTargetAudience/25/20/3*e.loadedAnnualInstructorCost+e.learnerTargetAudience*(e.TDYDays*e.TDYCostPerDay)};this.data=Object(E.a)({},e,a)}},{key:"render",value:function(){var e=this.props.classes;return this.calcAndSetData(),r.a.createElement(n.Fragment,null,r.a.createElement(Y.a,{variant:"h4",gutterBottom:!0},"Live Instruction"),r.a.createElement(Y.a,{variant:"body1",gutterBottom:!0},"Resident learning. Content is scored by an instructor, and the learner and instructor are in the same classroom."),r.a.createElement(p.a,{className:e.divider}),r.a.createElement(Y.a,{variant:"h5",gutterBottom:!0},"Costs by ADDIE Stage"),r.a.createElement(g.a,{container:!0,spacing:8},r.a.createElement(g.a,{item:!0,xs:4},r.a.createElement(A.a,{className:e.card},r.a.createElement(D.a,null,r.a.createElement(Y.a,{variant:"h6",className:[e.addieTitle,e.addieA].join(" ")},"Analysis"),r.a.createElement(Y.a,{varient:"body1"},"Costs are fixed. Activities include job analysis and other tasks performed by an ISD without the need for automated tools.")))),r.a.createElement(g.a,{item:!0,xs:4},r.a.createElement(A.a,{className:e.card},r.a.createElement(D.a,null,r.a.createElement(Y.a,{variant:"h6",className:[e.addieTitle,e.addieD1].join(" ")},"Design"),r.a.createElement(Y.a,{variant:"body1"},"Costs are fixed. Activies include design of TLOs, ELOs, sequencing, etc., done during TDC.")))),r.a.createElement(g.a,{item:!0,xs:4},r.a.createElement(A.a,{className:e.card},r.a.createElement(D.a,null,r.a.createElement(Y.a,{variant:"h6",className:[e.addieTitle,e.addieD2].join(" ")},"Development"),r.a.createElement(Y.a,{variant:"body1"},"Instructor Content Hour (ICU) and Non-Instruction Content Hour (NICH) costs not computed.")))),r.a.createElement(g.a,{item:!0,xs:4},r.a.createElement(A.a,{className:e.card},r.a.createElement(D.a,null,r.a.createElement(Y.a,{variant:"h6",className:[e.addieTitle,e.addieI].join(" ")},"Implementation"),r.a.createElement(N.a,null,r.a.createElement(y.a,null,r.a.createElement(x.a,null,r.a.createElement(j.a,null,"Total Learner TDY Cost for Target Audience"),r.a.createElement(j.a,{className:e.numberCell},"$",this.data.totalTDYCost.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"# Instructors Required for Every 25 Students"),r.a.createElement(j.a,{className:e.numberCell},Math.round(this.data.instPer25Students).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"# Instructors Teaching 40 Weeks a Year (20 2-week classes)"),r.a.createElement(j.a,{className:e.numberCell},Math.round(this.data.instTeaching40weeks1).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"# Instructors Teaching 40 Weeks a Year (40 1-week classes)"),r.a.createElement(j.a,{className:e.numberCell},Math.round(this.data.instTeaching40weeks2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"# Instructors Needed for TDY Course if Spread Across 3 Years"),r.a.createElement(j.a,{className:e.numberCell},Math.round(this.data.instTDY3Years).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"Instructor Cost Annually"),r.a.createElement(j.a,{className:e.numberCell},"$",this.data.instAnnualCost.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"Learner TDY Cost per TDY"),r.a.createElement(j.a,{className:e.numberCell},"$",this.data.learnerTDYCost.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"Cost Per Annual Student for Instructor"),r.a.createElement(j.a,{className:e.numberCell},"$",this.data.instCostPerAnnualLearner.toFixed(2))),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"Cost of One Classroom Per Learner Per Course"),r.a.createElement(j.a,{className:e.numberCell},"$",this.data.costOneClassroom.toFixed(2))),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"Implementation Cost Per Learner"),r.a.createElement(j.a,{className:e.numberCell},"$",this.data.implementationCostPerLearner.toFixed(2)))))))),r.a.createElement(g.a,{item:!0,xs:4},r.a.createElement(A.a,{className:e.card},r.a.createElement(D.a,null,r.a.createElement(Y.a,{variant:"h6",className:[e.addieTitle,e.addieE].join(" ")},"Evaluation"),r.a.createElement(Y.a,{variant:"body1",gutterBottom:!0},"NOTE: Figures not yet implemented."),r.a.createElement(N.a,null,r.a.createElement(y.a,null,r.a.createElement(x.a,null,r.a.createElement(j.a,null,"Army Training Help Desk (ATHD)"),r.a.createElement(j.a,{className:e.numberCell},"-")),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"ATHD RightNow License Cost (for all Agents)"),r.a.createElement(j.a,{className:e.numberCell},"-")),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"TKT Hours"),r.a.createElement(j.a,{className:e.numberCell},"-")),r.a.createElement(x.a,null,r.a.createElement(j.a,null,"Evaluation Cost per Learner"),r.a.createElement(j.a,{className:e.numberCell},"-"))))))),r.a.createElement(g.a,{item:!0,xs:4},r.a.createElement(A.a,{className:e.card},r.a.createElement(D.a,null,r.a.createElement(Y.a,{variant:"h6",className:[e.addieTitle,e.addieT].join(" ")},"Totals"),r.a.createElement(N.a,null,r.a.createElement(y.a,null,r.a.createElement(x.a,null,r.a.createElement(j.a,{className:[e.total,e.big].join(" ")},"Total Cost"),r.a.createElement(j.a,{numeric:!0,className:[e.numberCell,e.total,e.big].join(" ")},"$",this.data.totalCost.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),r.a.createElement(x.a,null,r.a.createElement(j.a,{className:e.total},"Total Cost per Learner"),r.a.createElement(j.a,{numeric:!0,className:[e.numberCell,e.total].join(" ")},"$",this.data.implementationCostPerLearner.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))))))))))}}]),a}(n.Component),w=Object(C.withStyles)(function(e){return{divider:{marginTop:2*e.spacing.unit,marginBottom:2*e.spacing.unit},card:{minHeight:"350px"},addieTitle:{paddingBottom:e.spacing.unit,marginBottom:e.spacing.unit,borderBottom:"3px solid #4e89eb"},addieA:{borderColor:"#4dabf5"},addieD1:{borderColor:"#5393ff"},addieD2:{borderColor:"#2196f3"},addieI:{borderColor:"#2979ff"},addieE:{borderColor:"#1769aa"},addieT:{borderColor:"#ff5722"},total:{fontWeight:"bold"},big:{fontSize:"1rem"},numberCell:{textAlign:"right"}}})(H),M=t(21),R=t.n(M);var $=Object(C.withStyles)(function(e){return{root:{padding:2*e.spacing.unit,width:"100%"},paper:{padding:2*e.spacing.unit},textField:{marginBottom:e.spacing.unit},divider:{marginTop:2*e.spacing.unit,marginBottom:2*e.spacing.unit}}})(function(e){var a=e.classes,t=null;switch(e.data.selected){case"cmi":t=r.a.createElement(n.Fragment,null,r.a.createElement(R.a,{type:"number",id:"cmi-finishedIMIHours",fullWidth:!0,className:a.textField,label:"Finished IMI Hours",onChange:e.onChanged,value:e.data.cmi.finishedIMIHours}),r.a.createElement(R.a,{type:"number",id:"cmi-contractIMIHours",fullWidth:!0,className:a.textField,label:"Contract IMI Hours",onChange:e.onChanged,value:e.data.cmi.contractIMIHours}),r.a.createElement(R.a,{type:"number",id:"cmi-contentPackages",fullWidth:!0,className:a.textField,label:"Content Packages",onChange:e.onChanged,value:e.data.cmi.contentPackages}));break;case"cai":t=r.a.createElement(n.Fragment,null,r.a.createElement(R.a,{type:"number",id:"cai-courseLength",fullWidth:!0,className:a.textField,label:"Length of Course (Hours)",onChange:e.onChanged,value:e.data.cai.courseLength}),r.a.createElement(R.a,{type:"number",id:"cai-TDYDays",fullWidth:!0,className:a.textField,label:"TDY Days",onChange:e.onChanged,value:e.data.cai.TDYDays}),r.a.createElement(R.a,{type:"number",id:"cai-classroomsRequired",fullWidth:!0,className:a.textField,label:"Classrooms Required",onChange:e.onChanged,value:e.data.cai.classroomsRequired}));break;case"live":t=r.a.createElement(n.Fragment,null,r.a.createElement(R.a,{type:"number",id:"live-courseLength",fullWidth:!0,className:a.textField,label:"Length of Course (Hours)",onChange:e.onChanged,value:e.data.live.courseLength}),r.a.createElement(R.a,{type:"number",id:"live-TDYDays",fullWidth:!0,className:a.textField,label:"TDY Days",onChange:e.onChanged,value:e.data.live.TDYDays}),r.a.createElement(R.a,{type:"number",id:"live-classroomsRequired",fullWidth:!0,className:a.textField,label:"Classrooms Required",onChange:e.onChanged,value:e.data.live.classroomsRequired}));break;default:t=null}return t}),W=t(37),G=t.n(W),q=t(52),z=t.n(q),K=t(98),U=t.n(K),J=t(54),Q=t.n(J),V=t(53),X=t.n(V),Z=function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).handleFieldChange=function(a){var t=a.target.id.split("-")[0],n=a.target.id.split("-")[1];e.setState(Object(u.a)({},t,Object(E.a)({},e.state[t],Object(u.a)({},n,a.target.value))))},e.handleTrainingType=function(a){e.setState({selected:a.target.value})},e.state={selected:null,shared:{learnerCostPerDay:1.61,loadedAnnualInstructorCost:1e5,TDYCostPerDay:100,learnerTargetAudience:6e5},cmi:{finishedIMIHours:0,contractIMIHours:0,contentPackages:0},cai:{courseLength:0,TDYDays:0,classroomsRequired:0},live:{courseLength:0,TDYDays:0,classroomsRequired:0}},e}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this,a=this.props.classes,t=null;switch(this.state.selected){case"cmi":t=r.a.createElement(O,{data:this.state,onChanged:function(a){return e.handleFieldChange}});break;case"cai":t=r.a.createElement(k,{data:this.state,onChanged:function(a){return e.handleFieldChange}});break;case"live":t=r.a.createElement(w,{data:this.state,onChanged:function(a){return e.handleFieldChange}});break;default:t=r.a.createElement(Y.a,{variant:"body1"},"Enter shared field values and select a method of instruction in the panel to the left.")}return r.a.createElement(g.a,{container:!0,spacing:8,className:a.root},r.a.createElement(g.a,{item:!0,xs:3},r.a.createElement(G.a,{className:a.paper},r.a.createElement(Y.a,{variant:"h5",gutterBottom:!0},"Shared Data"),r.a.createElement(Y.a,{variant:"body1",gutterBottom:!0},"Enter shared data values in the fields below:"),r.a.createElement(R.a,{type:"number",id:"shared-learnerCostPerDay",fullWidth:!0,className:a.textField,label:"Classroom cost per day per learner",onChange:this.handleFieldChange,value:this.state.shared.learnerCostPerDay,InputProps:{startAdornment:r.a.createElement(z.a,{position:"start"},"$")}}),r.a.createElement(R.a,{type:"number",id:"shared-loadedAnnualInstructorCost",fullWidth:!0,className:a.textField,label:"Loaded annual cost for each instructor",onChange:this.handleFieldChange,value:this.state.shared.loadedAnnualInstructorCost,InputProps:{startAdornment:r.a.createElement(z.a,{position:"start"},"$")}}),r.a.createElement(R.a,{type:"number",id:"shared-TDYCostPerDay",fullWidth:!0,className:a.textField,label:"TDY cost per day for each learner",onChange:this.handleFieldChange,value:this.state.shared.TDYCostPerDay,InputProps:{startAdornment:r.a.createElement(z.a,{position:"start"},"$")}}),r.a.createElement(R.a,{type:"number",id:"shared-learnerTargetAudience",fullWidth:!0,className:a.textField,label:"Total Learner Target Audience Throughput",onChange:this.handleFieldChange,value:this.state.shared.learnerTargetAudience}),r.a.createElement(p.a,{className:a.divider}),r.a.createElement(Y.a,{variant:"h5",gutterBottom:!0},"IMI Method of Instruction Data"),r.a.createElement(Y.a,{variant:"body1",gutterBottom:!0},"Select a method of instruction and enter values in the fields below:"),r.a.createElement(U.a,{name:"training-type",value:this.state.selected,onChange:this.handleTrainingType,row:!0},r.a.createElement(X.a,{value:"cmi",control:r.a.createElement(Q.a,null),label:"CMI"}),r.a.createElement(X.a,{value:"cai",control:r.a.createElement(Q.a,null),label:"CAI"}),r.a.createElement(X.a,{value:"live",control:r.a.createElement(Q.a,null),label:"Live"})),r.a.createElement($,{data:this.state,onChanged:this.handleFieldChange}))),r.a.createElement(g.a,{item:!0,xs:9},r.a.createElement(G.a,{className:a.paper},t)))}}]),a}(n.Component),_=Object(C.withStyles)(function(e){return{root:{padding:2*e.spacing.unit,width:"100%"},paper:{padding:2*e.spacing.unit},textField:{marginBottom:e.spacing.unit},divider:{marginTop:2*e.spacing.unit,marginBottom:2*e.spacing.unit}}})(Z),ee=t(99),ae=t.n(ee),te=t(100),ne=t.n(te),re=t(101),le=t.n(re),se=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(ae.a,null),r.a.createElement(ne.a,{position:"static"},r.a.createElement(le.a,null,r.a.createElement(Y.a,{variant:"h4",style:{color:"white"}},"IMI Method of Instruction Cost Calculator"))),r.a.createElement(_,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[102,2,1]]]);
//# sourceMappingURL=main.9586d88d.chunk.js.map