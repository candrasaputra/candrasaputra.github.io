(this["webpackJsonpxendit-dashboard-ui"]=this["webpackJsonpxendit-dashboard-ui"]||[]).push([[99],{1465:function(e,t,a){"use strict";a.r(t);var n=a(9),l=a.n(n),r=a(19),c=a(12),s=a(0),i=a.n(s),o=a(67),u=a(380),E=a(27),m=a(1598),d=a.n(m),D=a(468),b=a(167),_=a(80),T=a(1573),p=a(189),f=function(e){return[{dataField:"formattedCreatedDate",text:e("dateCreated"),headerStyle:{width:"15%"}},{dataField:"externalId",text:e("reference"),type:"text",headerStyle:{width:"25%"}},{dataField:"totalGrossValue",text:e("gross"),headerStyle:{width:"15%"}},{dataField:"totalFeesValue",text:e("fee"),headerStyle:{width:"15%"}},{dataField:"totalRefundValue",text:e("refund"),headerStyle:{width:"15%"}},{dataField:"totalSettledValue",text:e("total"),headerStyle:{width:"15%"}}]},C=a(1575),O=a.n(C),v=a(288),A=a.n(v),I=Object(u.a)("creditCardDetails")((function(e){var t=e.data,a=e.t,n=t.settlementDate,l=t.status,r=t.totalFeeAmount,c=t.totalGrossAmount,s=t.totalPaymentsCount,o=t.totalRefundedAmount,u=t.totalSettledAmount,E=function(e){return e===b.x.SETTLED?i.a.createElement(O.a,{variant:"success",text:A()(b.x.SETTLED.toLowerCase())}):i.a.createElement(O.a,{text:A()(b.x.PENDING.toLowerCase())})}(l),m=Object(T.c)(c,"IDR"),d=Object(T.c)(r,"IDR",!1),D=Object(T.c)(o,"IDR",!1),f=Object(T.c)(u,"IDR"),C=c>0?"color-success":"",v=r>0?"color-danger":"",I=o>0?"color-danger":"",N=u>0?"color-success":"",R=function(e,t){return[{label:t("estimatedSettlementDate"),value:Object(p.i)(e.settlementDate,"IDR")},{label:t("paymentCount"),value:e.totalPaymentsCount},{label:t("totalGross"),value:e.totalGrossValue},{label:t("totalFee"),value:e.totalFeesValue},{label:t("totalRefund"),value:e.totalRefundValue},{label:t("totalAmountSettled"),value:e.totalSettledValue}]}({settlementDate:n,totalPaymentsCount:s,totalGrossValue:i.a.createElement("span",{className:"".concat(C," text-fair")},m),totalFeesValue:i.a.createElement("span",{className:"".concat(v," text-fair")},d),totalRefundValue:i.a.createElement("span",{className:"".concat(I," text-fair")},D),totalSettledValue:i.a.createElement("span",{className:"".concat(N," text-fair")},f)},a).filter((function(e){return e.value}));return i.a.createElement(_.ab,{status:E,items:R})})),N=a(290),R=a.n(N),S=Object(u.a)("creditCardDetails")((function(e){var t=e.ccPayments,a=e.onDetailsClicked,n=e.t,l=(t&&t.length?t:[]).map((function(e){var t=e.id,a=e.created,n=e.external_id,l=e.captured_amount,r=e.net_fee_amount,c=e.total_refund_amount,s=e.net_amount,o=Object(p.h)(a),u=Object(T.c)(l,"IDR"),E=Object(T.c)(r,"IDR",!1),m=Object(T.c)(c,"IDR",!1),d=Object(T.c)(s,"IDR"),D=l>0?"color-success":"",b=r>0?"color-danger":"",_=c>0?"color-danger":"",f=s>0?"color-success":"";return{id:t,formattedCreatedDate:o,externalId:n,totalGrossValue:i.a.createElement("span",{className:D},u),totalFeesValue:i.a.createElement("span",{className:b},E),totalRefundValue:i.a.createElement("span",{className:_},m),totalSettledValue:i.a.createElement("span",{className:f},d)}}));return i.a.createElement(_.z,null,i.a.createElement("p",{className:"text-md font-weight-bold"},n("chargeDetails")),i.a.createElement(R.a,{noBorder:!0,isClickable:!0,tableHeaderColumns:f(n),tableContentRows:l,onDetailsClicked:a}))}));t.default=Object(o.o)(Object(u.a)(["creditCardDetails","creditCardErrorMessages","errorMessages"])((function(e){var t=e.match,a=e.history,n=e.apiCall,o=e.t,u=e.settlementId,m=e.isTransactionDetails,T=e.environment,p=u||t.params.credit_card_settlement_id,f=Object(s.useState)(!1),C=Object(c.a)(f,2),O=C[0],v=C[1],A=Object(s.useState)({}),N=Object(c.a)(A,2),R=N[0],L=N[1],h=Object(s.useState)(!0),j=Object(c.a)(h,2),y=j[0],x=j[1],M=Object(s.useState)(""),F=Object(c.a)(M,2),g=F[0],P=F[1];Object(s.useEffect)((function(){v(!0),k()}),[]),Object(s.useEffect)((function(){O&&H()}),[T]);var k=function(){var e=Object(r.a)(l.a.mark((function e(){var t,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.location.state&&a.location.state.isFromSettlementsDetailsPage,x(!0),e.next=4,d.a.getItem("LAST_CC_SETTLEMENT_DETAILS_TRANSACTIONS");case 4:if(n=e.sent,!t||Object(E.isNull)(n)){e.next=14;break}return r=JSON.parse(n),L(r.creditCardSettlementDetails),x(!1),a.replace({pathname:a.location.pathname,state:{}}),e.next=12,d.a.removeItem("LAST_CC_SETTLEMENT_DETAILS_TRANSACTIONS");case 12:e.next=15;break;case 14:V();case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(r.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.prev=1,e.next=4,n.axiosGet(b.d.ccSettlementDetails(p));case 4:if(!(t=e.sent).error_code){e.next=7;break}throw t;case 7:L(t),x(!1),e.next=16;break;case 11:return e.prev=11,e.t0=e.catch(1),P(Object(D.b)(e.t0.error_code,o)),x(!1),e.abrupt("return");case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}(),U=R.credit_card_payments,Y=R.id,w={settlementDate:R.settlement_date,status:R.status,totalFeeAmount:R.total_fee_amount,totalGrossAmount:R.total_gross_amount,totalPaymentsCount:R.total_payments_count,totalRefundedAmount:R.total_refunded_amount,totalSettledAmount:R.total_settled_amount},H=function(){a.push({pathname:b.e.ccTransactions,state:{selectedTabIndex:5,isFromDetailsPage:!0}})},G=function(){d.a.setItem("LAST_CC_SETTLEMENT_DETAILS_TRANSACTIONS",JSON.stringify({creditCardSettlementDetails:R}))},B=i.a.createElement(i.a.Fragment,null,i.a.createElement(I,{data:w}),i.a.createElement(S,{ccPayments:U,onDetailsClicked:function(e){var t=e.id,n=Y;G(),a.push({pathname:b.e.ccChargeDetails(t),state:{settlementId:n,isFromSettlementsDetailsPage:!0}})}})),X=y||g?i.a.createElement(_.z,{isLoading:y,loadingText:o("loadingSettlementDetails"),isError:!Object(E.isEmpty)(g),errorText:g}):B;return i.a.createElement(i.a.Fragment,null,!m&&i.a.createElement(_.o,{goBack:H,title:o("creditCardSettlementDetails")}),X)})))},1495:function(e,t,a){"use strict";a.r(t);var n=a(9),l=a.n(n),r=a(19),c=a(12),s=a(0),i=a.n(s),o=a(67),u=a(380),E=a(80),m=a(511),d=a(284),D=a(205),b=Object(u.a)("transactionDetails")((function(e){var t=e.paymentData,a=e.t,n=t.name,l=t.bank_code,r=t.account_number,c=[{label:a("vaDetailsNameLabel"),value:n},{label:a("vaDetailsBankLabel"),value:l},{label:a("vaDetailsAccountNumberLabel"),value:r}];return i.a.createElement(D.a,{lg:6},i.a.createElement(E.p,{items:c,title:a("vaDetailsTitle")}))})),_=Object(u.a)("transactionDetails")((function(e){var t=e.paymentData,a=e.t,n=t.name,l=t.retail_outlet_name,r=t.payment_code,c=[{label:a("fpcDetailsNameLabel"),value:n},{label:a("fpcDetailsRONameLabel"),value:l},{label:a("fpcDetailsPaymentCodeLabel"),value:r}];return i.a.createElement(D.a,{lg:6},i.a.createElement(E.p,{items:c,title:a("fpcDetailsTitle")}))})),T=Object(u.a)("transactionDetails")((function(e){var t=e.paymentData,a=e.t,n=t.account_holder_name,l=t.bank_code,r=t.account_number,c=t.description,s=[{label:a("disbDetailsNameLabel"),value:n},{label:a("disbDetailsBankLabel"),value:l},{label:a("disbDetailsAccountNumberLabel"),value:r},{label:a("disbDetailsDescLabel"),value:c}];return i.a.createElement(D.a,{lg:6},i.a.createElement(E.p,{items:s,title:a("disbDetailsTitle")}))})),p=a(31),f=a.n(p),C=Object(u.a)("transactionDetails")((function(e){var t=e.paymentData,a=e.t,n=t.id,l=t.created_date,r=t.type,c=t.reference,s=f()(new Date(l)).format("D MMM YYYY, hh:mm A"),o=[{label:a("trxDetailsDateLabel"),value:s},{label:a("trxDetailsTypeLabel"),value:r},{label:a("reversalDetailsIDLabel"),value:n},{label:a("trxDetailsReferenceLabel"),value:c}];return i.a.createElement(D.a,{lg:6},i.a.createElement(E.p,{items:o,title:a("reversalDetailsTitle")}))})),O=a(20),v=a.n(O),A=a(37),I=a(26),N="VIRTUAL ACCOUNT",R="VIRTUAL_ACCOUNT_SETTLEMENT",S="VIRTUAL_ACCOUNT_PAYMENT",L="VIRTUAL_ACCOUNT_FEE",h="DISBURSEMENT",j="DIRECT_DISBURSEMENT_CREATED",y="DIRECT_DISBURSEMENT_COMPLETED",x="DIRECT_DISBURSEMENT_FEE",M="SETTLEMENT_DISBURSEMENT_CREATED",F="SETTLEMENT_DISBURSEMENT_COMPLETED",g="CREDIT_CARD_PAYMENT",P="CREDIT_CARD_REFUND",k="CREDIT_CARD_SETTLEMENT",V="CREDIT_CARD_FEE",U="BATCH_DISBURSEMENT_FEE",Y="INVOICE_NON_FIXED_VA_FEE",w="INVOICE_FIXED_VA_FEE",H="INVOICE_RETAIL_OUTLET_XENDIT_FEE",G="REVERSAL",B="XENDIT_FIXED_PAYMENT_CODE_PAYMENT_DIRECT_FEE",X="FIXED_PAYMENT_CODE_SETTLEMENT",z="FIXED_PAYMENT_CODE_PAYMENT",J="CARD_PAYMENT_CREATED",W="CARD_PAYMENT_COMPLETED",q="CARD_PAYMENT_REFUND",K=["CREDIT_CARD_FEE_REFUND","FAILED_CREDIT_CARD_FEE_REFUND"],Q={ESCROW:"HOLDING",CASH:"CASH",HOLDING:"HOLDING",PENDING:"HOLDING",DEFAULT:"DEFAULT"},Z=function(e){return"/api/transactions/".concat(e)},$=a(1575),ee=a.n($),te=a(1573),ae=a(167),ne=Object(u.a)("transactionDetails")((function(e){var t=e.transactionData,a=e.paymentId,n=e.t,l=t.is_credit,r=t.status,c=t.type,s=t.transaction_date,o=t.reference,u=t.amount,m=f()(new Date(s)).format("D MMM YYYY, hh:mm A"),d=K.includes(c)&&i.a.createElement("div",{className:"d-flex justify-content-end mt-3"},i.a.createElement(v.a,{customCss:"offset-xl-1",iconLeft:i.a.createElement(A.a,{icon:I.w}),size:"sm",target:"_blank",href:ae.e.ccChargeDetails(a)},n("goToChargeDetails"))),b=[{label:n("trxDetailsTypeLabel"),value:c},{label:n("trxDetailsDateLabel"),value:m},{label:n("trxDetailsReferenceLabel"),value:o}],_=Object(te.c)(u,"IDR",l);return i.a.createElement(D.a,{lg:6},i.a.createElement(E.p,{items:b,title:n("trxDetailsTitle"),label:function(e){return"COMPLETED"===e?i.a.createElement(ee.a,{variant:"success",text:n(e)}):"PENDING"===e?i.a.createElement(ee.a,{variant:"warning",text:n(e)}):"FAILED"===e?i.a.createElement(ee.a,{variant:"danger",text:n(e)}):i.a.createElement(ee.a,{text:n(e)})}(r),amountValue:_,amountColor:l?"success":"danger",children:d}))})),le=Object(u.a)("transactionDetails")((function(e){var t=e.transactionData,a=e.t,n=t.amount,l=t.vat_paid_amount,r=n-l,c=Object(te.b)(r,"IDR"),s=Object(te.b)(l,"IDR"),o=[{label:a("feeDetailsAmountLabel"),value:c},{label:a("feeDetailsVATAmountLabel"),value:s}];return i.a.createElement(D.a,{lg:6},i.a.createElement(E.p,{items:o,title:a("feeDetailsTitle")}))})),re=Object(u.a)("transactionDetails")((function(e){var t=e.transactionData,a=e.accountType,n=e.t,l=t.is_credit,r=t.status,c=t.type,s=t.transaction_date,o=t.reference,u=t.amount,m=f()(new Date(s)).format("D MMM YYYY, hh:mm A"),d="/".concat(a,"/").concat(o),b=i.a.createElement("a",{href:d},o),_=[{label:n("trxDetailsTypeLabel"),value:c},{label:n("trxDetailsDateLabel"),value:m},{label:n("trxDetailsReferenceLabel"),value:b}],T=Object(te.c)(u,"IDR",l);return i.a.createElement(D.a,{lg:6},i.a.createElement(E.p,{items:_,title:n("trxDetailsTitle"),label:function(e){return"COMPLETED"===e?i.a.createElement(ee.a,{variant:"success",text:n(e)}):"PENDING"===e?i.a.createElement(ee.a,{variant:"warning",text:n(e)}):"FAILED"===e?i.a.createElement(ee.a,{variant:"danger",text:n(e)}):i.a.createElement(ee.a,{text:n(e)})}(r),amountValue:T,amountColor:l?"success":"danger"}))})),ce=Object(u.a)("transactionDetails")((function(e){var t=e.paymentData,a=e.t,n=t.cardholder_name,l=t.bank_code,r=t.masked_card_number,c=[{label:a("cardholderName"),value:n},{label:a("disbDetailsBankLabel"),value:l},{label:a("cardNumber"),value:r}];return i.a.createElement(D.a,{lg:6},i.a.createElement(E.p,{items:c,title:a("disbDetailsTitle")}))})),se=a(27),ie=Object(u.a)("transactionDetails")((function(e){var t=e.paymentData,a=e.t,n=t.account_number,l=t.remittance_collection_virtual_account_id,r=t.remittance_collection_virtual_account_payment_id,c=t.claimed_amount,s=t.recipient_customer_id,o=t.source_of_fund,u=t.transfer_purpose,m=t.failure_reason,d=t.risk_score,b=t.risk_score_reason,_=c&&Object(te.d)(c),T=[{label:a("remittanceCollectionVirtualAccountId"),value:l,shouldHide:Object(se.isEmpty)(l)},{label:a("remittanceCollectionVirtualAccountPaymentId"),value:r,shouldHide:Object(se.isEmpty)(r)},{label:a("accountNumber"),value:n,shouldHide:Object(se.isEmpty)(n)},{label:a("claimedAmount"),value:_,shouldHide:!_},{label:a("recipientCustomerId"),value:s,shouldHide:Object(se.isEmpty)(s)},{label:a("sourceOfFund"),value:o,shouldHide:Object(se.isEmpty)(o)},{label:a("transferPurpose"),value:u,shouldHide:Object(se.isEmpty)(u)},{label:a("riskScore"),value:d,shouldHide:Object(se.isEmpty)(d)},{label:a("riskScoreReason"),value:b,shouldHide:Object(se.isEmpty)(b)},{label:a("failureReason"),value:m,shouldHide:Object(se.isEmpty)(m)}];return i.a.createElement(D.a,{lg:6},i.a.createElement(E.p,{items:T,title:a("remittanceCollectionDetails")}))})),oe=a(1466),ue=a(1465),Ee=function(e){return e.length>0?e.split("/").slice(0,-1).join("/"):""};t.default=Object(o.o)(Object(u.a)("transactionDetails")((function(e){var t=e.apiCall,a=e.t,n=e.cookies,o=e.location.pathname,u=e.match.params,D=e.user,p=e.business,f=e.history,O=e.environment,v=Object(s.useState)(!1),A=Object(c.a)(v,2),I=A[0],K=A[1],$=Object(s.useState)({}),ee=Object(c.a)($,2),te=ee[0],ae=ee[1],se=Object(s.useState)({}),me=Object(c.a)(se,2),de=me[0],De=me[1],be=Object(s.useState)(!1),_e=Object(c.a)(be,2),Te=_e[0],pe=_e[1],fe=Object(s.useState)(!1),Ce=Object(c.a)(fe,2),Oe=Ce[0],ve=Ce[1],Ae=u.transaction_id,Ie=o.split("/")[1].toUpperCase(),Ne=function(){var e=Object(r.a)(l.a.mark((function e(){var a,n,r,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ve(!1),ae(null),De(null),pe(!0),e.prev=4,n={environment:O,account_type:Q[Ie]},e.next=8,t.axiosGet(Z(Ae),n);case 8:if(!(a=e.sent).error_code){e.next=11;break}throw a;case 11:e.next=18;break;case 13:return e.prev=13,e.t0=e.catch(4),pe(!1),ve(!0),e.abrupt("return");case 18:c=(r=a).general_details,s=r.payment_type_details,ae(c),De(s),pe(!1);case 22:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(){return e.apply(this,arguments)}}(),Re=function(){var e=te.type===U,t=i.a.createElement(le,{transactionData:te});return e?te.vat_paid_amount>0&&t:te.is_vat_enabled&&t},Se=function(){f.push({pathname:Ee(o),state:{isFromDetailsPage:!0}})};return Object(s.useEffect)((function(){if(K(!0),f.location.state){var e=f.location.state,t=e.transactionType,a=e.paymentId;if([k,g].includes(t))return ae({type:t}),void De({id:a})}Ne()}),[]),Object(s.useEffect)((function(){I&&Se()}),[O]),i.a.createElement(i.a.Fragment,null,i.a.createElement(E.o,{title:a("headerTitle"),goBack:Se}),Te||Oe?i.a.createElement(E.z,{isLoading:Te,loadingText:a("loadingText"),isError:Oe,errorText:a("errorText")}):function(){var e,a,l=function(e){if(e){var t=[k,V],a=[h,j,y,M,F],n=[J,W,q],l=[N,S,R],r=[B,X,z],c=e===L,s=[x,Y,w,H,U];return[g,P].includes(e)?"CREDIT_CARD_PAYMENT":t.includes(e)?"CREDIT_CARD_SETTLEMENT":l.includes(e)?"VIRTUAL_ACCOUNT":r.includes(e)?"FIXED_PAYMENT_CODES":a.includes(e)?"DISBURSEMENT":n.includes(e)?"CARD_PAYMENT":s.includes(e)?"FEE":c?"VIRTUAL_ACCOUNT_FEE":e.includes(G)?"REVERSAL":void 0}}(te.type),r=te.amount&&i.a.createElement(ne,{transactionData:te,paymentId:de.id});switch(l){case"CREDIT_CARD_PAYMENT":return i.a.createElement(oe.default,{user:D,cookies:n,paymentId:de.id,apiCall:t,business:p,isTransactionDetails:!0});case"CREDIT_CARD_SETTLEMENT":return i.a.createElement(ue.default,{apiCall:t,isTransactionDetails:!0,settlementId:de.id});case"VIRTUAL_ACCOUNT_FEE":a=Re();case"VIRTUAL_ACCOUNT":e=i.a.createElement(b,{paymentData:de});break;case"FIXED_PAYMENT_CODES":e=i.a.createElement(_,{paymentData:de});break;case"DISBURSEMENT":e=i.a.createElement(T,{paymentData:de});break;case"CARD_PAYMENT":e=i.a.createElement(ce,{paymentData:de});break;case"REVERSAL":r=i.a.createElement(re,{transactionData:te,accountType:Ie}),e=i.a.createElement(C,{paymentData:de});break;case"REMITTANCE_COLLECTION":e=i.a.createElement(ie,{paymentData:de});break;case"FEE":a=Re()}return i.a.createElement(m.a,null,i.a.createElement(d.a,null,r,e),a&&i.a.createElement(d.a,null,a))}())})))}}]);