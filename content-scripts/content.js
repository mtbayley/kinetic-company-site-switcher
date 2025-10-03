// Utility: Insert custom style into document head
function insertDialogStyle() {
  if (document.getElementById('injected-dialog-style')) return;
  const style = document.createElement('style');
  style.id = 'injected-dialog-style';
  style.textContent = '<style>[_ngcontent-ng-c651855144]:root{--accent: hsl(19, 97%, 81%);--automotive: hsl(194, 9%, 72%);--base: hsl(206, 26%, 95%);--building-supply: hsl(70, 43%, 65%);--distribution: hsl(9, 43%, 79%);--distribution-x50: hsl(9, 50%, 50%);--distribution-x73: hsl(9, 100%, 73%);--error: hsl(7, 100%, 71%);--error-50: hsl(7, 100%, 50%);--error-91: hsl(7, 100%, 91%);--focus: hsl(323, 32%, 57%);--info: hsl(200, 60%, 50%);--info-x92: hsl(200, 100%, 92%);--interactive: hsl(201, 85%, 34%);--interactive-24: hsl(201, 85%, 24%);--interactive-44: hsl(201, 85%, 44%);--interactive-54: hsl(201, 85%, 54%);--interactive-82: hsl(201, 85%, 82%);--interactive-x96: hsl(201, 100%, 96%);--manufacturing: hsl(194, 34%, 73%);--neutral: hsl(0, 0%, 100%);--neutral-20: hsl(0, 0%, 20%);--neutral-27: hsl(0, 0%, 27%);--neutral-38: hsl(0, 0%, 38%);--neutral-52: hsl(0, 0%, 52%);--neutral-80: hsl(0, 0%, 80%);--neutral-95: hsl(0, 0%, 95%);--nothing: hsl(0, 0%, 0%);--primary: hsl(192, 96%, 20%);--primary-2485: hsl(192, 24%, 85%);--primary-2491: hsl(192, 24%, 91%);--primary-3468: hsl(192, 34%, 68%);--primary-3495: hsl(192, 34%, 95%);--retail: hsl(46, 69%, 76%);--secondary: hsl(199, 89%, 18%);--selected: hsl(57, 93%, 83%);--selected-93: hsl(57, 93%, 93%);--selected-97: hsl(57, 93%, 97%);--shadow-15: hsla(0, 0%, 0%, .15);--shadow-35: hsla(0, 0%, 0%, .35);--success: hsl(172, 43%, 52%);--success-3682: hsl(172, 36%, 82%);--success-4566: hsl(172, 45%, 66%);--success-9532: hsl(172, 95%, 32%);--success-x96: hsl(172, 100%, 96%);--tertiary: hsl(154, 42%, 69%);--warning: hsl(44, 100%, 80%);--warning-41: hsl(44, 100%, 41%);--warning-91: hsl(44, 100%, 91%)}.k-tabstrip-content[_ngcontent-ng-c651855144], .k-tabstrip[_ngcontent-ng-c651855144] > .k-content[_ngcontent-ng-c651855144]{position:inherit!important}#metaFxTabStrip[_ngcontent-ng-c651855144]   .k-tabstrip[_ngcontent-ng-c651855144] > .k-tabstrip-content[_ngcontent-ng-c651855144]{padding-top:0}  .ep-button-wrapper{display:inline-block;font-size:12px}  .ep-button-wrapper .ep-button{font-family:SourceSansPro-Regular,sans-serif,weight;background:none;color:var(--neutral);border:0;cursor:pointer;display:inline-flex;justify-content:center;align-items:center;margin:5px 10px 5px 5px}  .ep-button-wrapper .ep-button.ep-primary{background:var(--interactive);color:var(--neutral)}  .ep-button-wrapper .ep-button.ep-primary:hover{background:var(--interactive-44);box-shadow:0 3px 6px var(--shadow-15)}  .ep-button-wrapper .ep-button.ep-primary:active{background:var(--interactive-24);color:var(--neutral-80)!important;box-shadow:0 1px 3px var(--shadow-15)}  .ep-button-wrapper .ep-button.ep-primary:focus{outline:1px solid var(--focus)!important;outline-offset:2px;z-index:2}  .ep-button-wrapper .ep-button.ep-outline,   .ep-button-wrapper .ep-button.ep-btn-outline{color:var(--interactive);border:2px solid var(--interactive);background:var(--neutral)}  .ep-button-wrapper .ep-button.ep-outline:hover,   .ep-button-wrapper .ep-button.ep-btn-outline:hover{background:var(--neutral);box-shadow:0 3px 6px var(--shadow-15);border-color:var(--interactive-44);color:var(--interactive-44)}  .ep-button-wrapper .ep-button.ep-outline:active,   .ep-button-wrapper .ep-button.ep-btn-outline:active{background:var(--neutral);color:var(--interactive);box-shadow:0 2px 3px var(--shadow-15)}  .ep-button-wrapper .ep-button.ep-outline:focus,   .ep-button-wrapper .ep-button.ep-btn-outline:focus{outline:1px solid var(--focus);outline-offset:2px}  .ep-button-wrapper .ep-button.ep-secondary{color:var(--interactive);background:none}  .ep-button-wrapper .ep-button.ep-secondary:hover{background:var(--neutral);box-shadow:0 3px 6px var(--shadow-15);border-color:var(--interactive-44);color:var(--interactive-44)}  .ep-button-wrapper .ep-button.ep-secondary:active{background:var(--neutral);color:var(--interactive);box-shadow:0 2px 3px var(--shadow-15)}  .ep-button-wrapper .ep-button.ep-secondary:focus{outline:1px solid var(--focus);outline-offset:2px}  .ep-button-wrapper .ep-button.ep-toggle{color:var(--interactive);border:2px solid var(--interactive);background:none}  .ep-button-wrapper .ep-button.ep-toggle:hover:not(.ep-state-active){background:var(--neutral);box-shadow:0 3px 6px var(--shadow-15);border-color:var(--interactive-44);color:var(--interactive-44)}  .ep-button-wrapper .ep-button.ep-toggle:active:not(.ep-state-active){background:var(--neutral);color:var(--interactive);box-shadow:0 2px 3px var(--shadow-15)}  .ep-button-wrapper .ep-button.ep-toggle:focus:not(.ep-state-active){outline:1px solid var(--focus);outline-offset:2px}  .ep-button-wrapper .ep-button.ep-toggle.ep-state-active{border:none;background:var(--interactive);color:var(--neutral)}  .ep-button-wrapper .ep-button.ep-toggle.ep-state-active:hover{background:var(--interactive-44);box-shadow:0 3px 6px var(--shadow-15)}  .ep-button-wrapper .ep-button.ep-toggle.ep-state-active:active{background:var(--interactive-24);color:var(--neutral-80)!important;box-shadow:0 1px 3px var(--shadow-15)}  .ep-button-wrapper .ep-button.ep-toggle.ep-state-active:focus{outline:1px solid var(--focus)!important;outline-offset:2px}  .ep-button-wrapper .ep-button .ep-truncate-text{white-space:nowrap;overflow:initial;text-overflow:ellipsis}  .ep-button-wrapper .ep-button.ep-btn-size-custom{font-size:1.167em;padding:4px;border-radius:3px;height:26px}  .ep-button-wrapper .ep-button.ep-btn-size-custom .mdi{font-size:16px}  .ep-button-wrapper .ep-button .ep-button-content>.mdi{vertical-align:middle}  .ep-button-wrapper .ep-button .mdi~.ep-button-content{margin-left:5px}  .ep-button-wrapper .ep-button .ep-button-content~.mdi{margin-left:5px}  .ep-button-wrapper .ep-button.ep-btn-size-small{font-size:1em;height:22px;font-weight:400;line-height:12px;padding:0 15px;border-radius:3px}  .ep-button-wrapper .ep-button.ep-btn-size-small .mdi{font-size:14px}  .ep-button-wrapper .ep-button.ep-btn-size-medium{font-size:1.167em;height:30px;font-weight:400;line-height:12px;padding:0 20px;border-radius:3px}  .ep-button-wrapper .ep-button.ep-btn-size-medium .mdi{font-size:16px}  .ep-button-wrapper .ep-button.ep-btn-size-regular{font-size:1.167em;height:40px;border-radius:4px;padding:0 30px;font-weight:400}  .ep-button-wrapper .ep-button.ep-btn-size-regular .mdi{font-size:16px}  .ep-button-wrapper.ep-btn-block{width:100%}  .ep-button-wrapper.ep-btn-block .ep-button{width:100%;display:block}  .ep-disabled>.ep-button-wrapper .ep-primary,   .ep-readonly>.ep-button-wrapper .ep-primary{background-color:var(--neutral-80)!important;color:var(--neutral-38)!important}  .ep-disabled>.ep-button-wrapper .ep-outline,   .ep-disabled>.ep-button-wrapper .ep-toggle,   .ep-readonly>.ep-button-wrapper .ep-outline,   .ep-readonly>.ep-button-wrapper .ep-toggle{background-color:var(--neutral)!important;border:2px solid var(--neutral-80)!important;color:var(--neutral-38)!important}  .ep-disabled>.ep-button-wrapper .ep-secondary,   .ep-readonly>.ep-button-wrapper .ep-secondary{color:var(--neutral-38)!important}</style>';
  document.head.appendChild(style);
}
// Utility: Wait for Help menu item to appear
function waitForHelpItem(timeout = 10000, interval = 100) {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const timer = setInterval(() => {
      const el = document.querySelector('ul.ep-menu-bar-section.secondary li#Help');
      if (el) {
        clearInterval(timer);
        resolve(el);
      } else if (Date.now() - start > timeout) {
        clearInterval(timer);
        reject(new Error('Help item not found within timeout'));
      }
    }, interval);
  });
}

// Utility: Get cookie value by name
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return decodeURIComponent(parts.pop().split(';').shift());
  }
  return null;
}

// Utility: Remove dialog by id
function removeDialog(id) {
  const dialog = document.getElementById(id);
  if (dialog && dialog.parentNode) dialog.parentNode.removeChild(dialog);
}

// Utility: Create and show a loading dialog
function showLoadingDialog(rect) {
  const loadingDialog = document.createElement('div');
  loadingDialog.id = 'company-select-dialog';
  loadingDialog.style.position = 'absolute';
  loadingDialog.style.top = (rect.bottom + window.scrollY + 5) + 'px';
  loadingDialog.style.left = (rect.left + window.scrollX) + 'px';
  loadingDialog.style.background = '#fff';
  loadingDialog.style.border = '1px solid #ccc';
  loadingDialog.style.padding = '20px';
  loadingDialog.style.zIndex = 9999;
  loadingDialog.textContent = 'Loading companies...';
  document.body.appendChild(loadingDialog);
}

// Utility: Show company selection dialog
function showCompanyDialog(rect, companies, plants, currentCompany, currentSite, onSelect) {
  const dialog = document.createElement('div');
  dialog.id = 'company-select-dialog';
  dialog.style.position = 'absolute';
  dialog.style.top = (rect.bottom + window.scrollY + 5) + 'px';
  dialog.style.left = (rect.left + window.scrollX) + 'px';
  dialog.style.background = '#fff';
  dialog.style.border = '1px solid #ccc';
  dialog.style.padding = '20px';
  dialog.style.zIndex = 9999;

  // Position dialog above the button, fallback below if not enough space
  const rowStyle = 'display: flex; align-items: center; margin-bottom: 12px;';
  const labelStyle = 'font-family: SourceSansPro-SemiBold; font-size: 18px; min-width: 90px;';
  const selectWidth = '400px';
  const selectStyle = `height: 40px; font-size: 16px; width: ${selectWidth}; max-width: 100%; box-sizing: border-box;`;

  // Company row
  const companyRow = document.createElement('div');
  companyRow.style.cssText = rowStyle;
  const companyLabel = document.createElement('label');
  companyLabel.setAttribute('for', 'company-select-dropdown');
  companyLabel.style.cssText = labelStyle;
  companyLabel.textContent = 'Company:';
  companyRow.appendChild(companyLabel);

  // Company dropdown
  const companySelect = document.createElement('select');
  companySelect.id = 'company-select-dropdown';
  companySelect.className = 'k-picker-lg k-rounded-lg';
  companySelect.style.cssText = selectStyle;
  companies.forEach(c => {
    const option = document.createElement('option');
    option.value = c.value;
    option.text = c.label;
    if (c.value === currentCompany) option.selected = true;
    companySelect.appendChild(option);
  });
  companyRow.appendChild(companySelect);
  dialog.appendChild(companyRow);

  // Plant row
  const plantRow = document.createElement('div');
  plantRow.style.cssText = rowStyle + ' margin-top: 0;';
  const plantLabel = document.createElement('label');
  plantLabel.setAttribute('for', 'plant-select-dropdown');
  plantLabel.style.cssText = labelStyle;
  plantLabel.textContent = 'Site:';
  plantRow.appendChild(plantLabel);

  // Plant dropdown
  const plantSelect = document.createElement('select');
  plantSelect.id = 'plant-select-dropdown';
  plantSelect.className = 'k-picker-lg k-rounded-lg';
  plantSelect.style.cssText = selectStyle;
  function updatePlantDropdown(selectedCompany) {
    plantSelect.innerHTML = '';
    plants.filter(p => p.company === selectedCompany).forEach(p => {
      const option = document.createElement('option');
      option.value = p.value;
      option.text = p.label;
      if (p.value === currentSite) option.selected = true;
      plantSelect.appendChild(option);
    });
  }
  // Initial population
  updatePlantDropdown(currentCompany || (companies[0] && companies[0].value));

  companySelect.addEventListener('change', function () {
    updatePlantDropdown(companySelect.value);
  });
  plantRow.appendChild(plantSelect);
  dialog.appendChild(plantRow);

  // --- Positioning logic: to the right of the button ---
  let left = rect.right + window.scrollX + 8; // 8px gap to the right
  dialog.style.visibility = 'hidden';
  dialog.style.left = left + 'px';
  document.body.appendChild(dialog);
  const dialogRect = dialog.getBoundingClientRect();
  document.body.removeChild(dialog);
  let top = rect.top + window.scrollY;
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  // If dialog goes off right edge, move left so it fits
  if (left + dialogRect.width > viewportWidth) {
    left = Math.max(8, viewportWidth - dialogRect.width - 8);
  }
  // If dialog goes off bottom edge, move up so it fits
  if (top + dialogRect.height > viewportHeight) {
    top = Math.max(8, viewportHeight - dialogRect.height - 8);
  }
  dialog.style.top = top + 'px';
  dialog.style.left = left + 'px';
  dialog.style.visibility = 'visible';

  const okBtnWrapper = document.createElement('ep-button');
  okBtnWrapper.className = 'ep-button-wrapper';
  const okBtn = document.createElement('button');
  okBtn.textContent = 'OK';
  okBtn.type = 'button';
  okBtn.className = 'ep-button ep-btn-size-regular ep-ripple-effect ep-primary';
  okBtnWrapper.appendChild(okBtn);

  const cancelBtnWrapper = document.createElement('ep-button');
  cancelBtnWrapper.className = 'ep-button-wrapper';
  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = 'Cancel';
  cancelBtn.type = 'button';
  cancelBtn.style.marginLeft = '10px';
  cancelBtn.className = 'ep-button ep-btn-size-regular ep-ripple-effect ep-primary';
  cancelBtnWrapper.appendChild(cancelBtn);

  const btnRow = document.createElement('div');
  btnRow.style.marginTop = '16px';
  btnRow.style.display = 'flex';
  btnRow.style.justifyContent = 'space-between';
  btnRow.style.gap = '0';
  btnRow.appendChild(cancelBtnWrapper);
  btnRow.appendChild(okBtnWrapper);
  dialog.appendChild(btnRow);
  document.body.appendChild(dialog);
  companySelect.focus();

  // Add click-away-to-close logic
  function handleClickAway(event) {
    if (!dialog.contains(event.target)) {
      removeDialog('company-select-dialog');
      document.removeEventListener('mousedown', handleClickAway, true);
    }
  }
  setTimeout(() => {
    document.addEventListener('mousedown', handleClickAway, true);
  }, 0);

  okBtn.onclick = () => {
    const selectedCompany = companySelect.value;
    const selectedPlant = plantSelect.value;
    removeDialog('company-select-dialog');
    document.removeEventListener('mousedown', handleClickAway, true);
    onSelect(selectedCompany, selectedPlant);
  };
  cancelBtn.onclick = () => {
    removeDialog('company-select-dialog');
    document.removeEventListener('mousedown', handleClickAway, true);
  };
}

// Utility: Set company in URL
function setCompany(u, val) {
  if (/([?&]company=)([^&#]*)/i.test(u)) {
    return u.replace(/([?&]company=)([^&#]*)/ig, (_, p1) => p1 + encodeURIComponent(val));
  }
  const i = u.indexOf('#');
  if (i > -1) {
    let pre = u.slice(0, i), hash = u.slice(i + 1);
    hash += hash.indexOf('?') > -1 ? '&company=' + encodeURIComponent(val) : '?company=' + encodeURIComponent(val);
    return pre + '#' + hash;
  }
  return u + (u.indexOf('?') > -1 ? '&' : '?') + 'company=' + encodeURIComponent(val);
}

// Utility: Set site in URL
function setPlant(u, val) {
  if (/([?&]site=)([^&#]*)/i.test(u)) {
    return u.replace(/([?&]site=)([^&#]*)/ig, (_, p1) => p1 + encodeURIComponent(val));
  }
  const i = u.indexOf('#');
  if (i > -1) {
    let pre = u.slice(0, i), hash = u.slice(i + 1);
    hash += hash.indexOf('?') > -1 ? '&site=' + encodeURIComponent(val) : '?site=' + encodeURIComponent(val);
    return pre + '#' + hash;
  }
  return u + (u.indexOf('?') > -1 ? '&' : '?') + 'site=' + encodeURIComponent(val);
}

// Utility: Reload page with new company
function reloadWithCompanyAndPlant(href, selectedCompany, selectedPlant) {
  var newUrl = setCompany(href, selectedCompany);
  newUrl = setPlant(newUrl, selectedPlant);
  try { location.replace(newUrl); } catch (e) { location.href = newUrl; }
  setTimeout(() => { try { location.reload(true); } catch (_) { location.reload(); } }, 50);
}

// Main logic
async function main() {
  try {
    var helpItem = await waitForHelpItem();
    if (document.getElementById('injected-company-btn')) {
      return;
    }

    // Add styles missing at start
    insertDialogStyle();

    // Create button
    const li = document.createElement('li');
    li.id = 'injected-company-btn';
    li.className = helpItem.className;
    li.style.cursor = 'pointer';
    li.title = 'Switch Company';

    // Epicor-like icon wrapper and SVG
    const epIcon = document.createElement('ep-svg-icon');
    epIcon.className = 'ep-component';
    epIcon.setAttribute('colorclass', 'ep-svg-color');
    const svgRoot = document.createElement('div');
    svgRoot.id = 'svgRoot';
    svgRoot.className = 'ep-svg-color';
    svgRoot.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 128C512 92.7 483.3 64 448 64L192 64zM304 416L336 416C353.7 416 368 430.3 368 448L368 528L272 528L272 448C272 430.3 286.3 416 304 416zM224 176C224 167.2 231.2 160 240 160L272 160C280.8 160 288 167.2 288 176L288 208C288 216.8 280.8 224 272 224L240 224C231.2 224 224 216.8 224 208L224 176zM368 160L400 160C408.8 160 416 167.2 416 176L416 208C416 216.8 408.8 224 400 224L368 224C359.2 224 352 216.8 352 208L352 176C352 167.2 359.2 160 368 160zM224 304C224 295.2 231.2 288 240 288L272 288C280.8 288 288 295.2 288 304L288 336C288 344.8 280.8 352 272 352L240 352C231.2 352 224 344.8 224 336L224 304zM368 288L400 288C408.8 288 416 295.2 416 304L416 336C416 344.8 408.8 352 400 352L368 352C359.2 352 352 344.8 352 336L352 304C352 295.2 359.2 288 368 288z"/></svg>`;
    epIcon.appendChild(svgRoot);
    li.appendChild(epIcon);

    // Insert button before Help
    helpItem.parentNode.insertBefore(li, helpItem);

    // Button click handler
    li.addEventListener('click', async function () {

      const href = location.href;

      // Remove any existing dialog
      removeDialog('company-select-dialog');

      // Get current company from URL
      const m = /([?&]company=)([^&#]*)/i.exec(href);
      const currentCompany = m ? decodeURIComponent(m[2]) : '';
      // Get current site from URL
      const siteMatch = /([?&]site=)([^&#]*)/i.exec(href);
      const currentSite = siteMatch ? decodeURIComponent(siteMatch[2]) : '';
      
      // Show loading dialog
      const rect = li.getBoundingClientRect();
      showLoadingDialog(rect);

      // Get ERP environment from URL
      const envMatch = /^https?:\/\/[^\/]+\/([^\/]+)/.exec(window.location.href);
      const erpEnv = envMatch && envMatch[1] ? envMatch[1] : null;
      if (!erpEnv) {
        alert('Could not determine ERP environment from URL.');
        removeDialog('company-select-dialog');
        return;
      }

      // Get bearer token from cookie
      var bearerToken = '';
      try {
        const cookieJson = getCookie('homepage__erp.token.auth');
        bearerToken = JSON.parse(decodeURIComponent(cookieJson)).token || '';
      } catch (e) {
        bearerToken = '';
      }

      // Get session from local storage
      var khpJson = localStorage.getItem(`appData.khp/${erpEnv.toLowerCase()}/apps/erp/home/`);
      var sessionId = '';
      if (khpJson) {
        try {
          var khpObj = JSON.parse(khpJson);
          sessionId = khpObj?.khp?.settings?.SessionId || '';
        } catch (e) {
          alert('Failed to get user session.');
          sessionId = '';
          return;
        }
      }

      // Get userId
      var userId = '';
      try {
        var sessionResp = await fetch(`/${erpEnv}/api/v2/odata/${currentCompany}/Ice.BO.KineticErpSvc/GetUserSessionAndVersion`, {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer ' + bearerToken,
            'sessioninfo': `{"sessionId":"${sessionId}"}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({})
        });
        var sessionData = await sessionResp.json();
        userId = sessionData.returnObj && sessionData.returnObj.user && sessionData.returnObj.user.userId ? sessionData.returnObj.user.userId : '';
        if (!userId) throw new Error('No userId');
      } catch (e) {
        alert('Failed to get user session.');
        removeDialog('company-select-dialog');
        return;
      }

      // Get company list
      var companies = [];
      try {
        var compResp = await fetch(`/${erpEnv}/api/v2/odata/${currentCompany}/Ice.BO.UserFileSvc/UserFiles?$filter=UserID%20eq%20%27${encodeURIComponent(userId)}%27&$select=UserID&$expand=UserComps($select=Company,CompanyName,CurPlant,WorkstationID)`, {
          headers: {
            'Authorization': 'Bearer ' + bearerToken,
            'sessioninfo': `{"sessionId":"${sessionId}"}`
          }
        });
        var data = await compResp.json();
        var userComps = data.value && data.value[0] && data.value[0].UserComps ? data.value[0].UserComps : [];
        companies = userComps.map(comp => ({ value: comp.Company, label: `${comp.Company} | ${comp.CompanyName}` || comp.Company }));
        if (!companies.length) throw new Error('No companies found');
      } catch (e) {
        alert('Failed to load company list.');
        removeDialog('company-select-dialog');
        return;
      }

      // Get company filter
      var companyFilter = companies.map(c => c.value).map(v => `Company = '${v}'`).join(' or ');

      // Get plant list
      var plants = [];
      try {
        var plantsResp = await fetch(`/${erpEnv}/api/v2/odata/${currentCompany}/Ice.BO.PlantSvc/GetList?whereClause=${encodeURIComponent(companyFilter)}+by+Company%2C+Name&pageSize=0&absolutePage=0`, {
          headers: {
            'Authorization': 'Bearer ' + bearerToken,
            'sessioninfo': `{"sessionId":"${sessionId}"}`
          }
        });
        var data = await plantsResp.json();
        plants = [];
        if (data.returnObj && Array.isArray(data.returnObj.PlantList)) {
          plants = data.returnObj.PlantList.map(plant => ({
            company: plant.Company,
            value: plant.Plant,
            label: `${plant.Plant} | ${plant.Name}`.trim()
          }));
        }
        if (!plants.length) {
          throw new Error('No sites found');
        }
      } catch (e) {
        alert('Failed to load sites list.');
        removeDialog('company-select-dialog');
        return;
      }

      removeDialog('company-select-dialog');
      showCompanyDialog(rect, companies, plants, currentCompany, currentSite, (selectedCompany, selectedPlant) => {
        if (!selectedCompany || !selectedPlant) {
          return;
        }
        reloadWithCompanyAndPlant(href, selectedCompany, selectedPlant);
      });
    });
  } catch (e) {
    // Fail silently
  }
}

main();
