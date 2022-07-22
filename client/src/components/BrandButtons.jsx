import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const BrandButtons = () => { 
    const navigate = useNavigate();
    const location = useLocation(); 
    const path = location.pathname; 
    
    return (
        <div className="brand-buttons">
            <button onClick={() => navigate('/sneakers/nike')} className={path === '/sneakers/nike' ? 'brand-button brand-button--active' : 'brand-button'}>
                <img src="https://static.nike.com/a/images/f_jpg,q_auto:eco/61b4738b-e1e1-4786-8f6c-26aa0008e80b/swoosh-logo-black.png" alt="Nike" />
            </button>
            <button onClick={() => navigate('/sneakers/adidas')} className={path === '/sneakers/adidas' ? 'brand-button brand-button--active' : 'brand-button'}>
                <img src="https://images.solecollector.com/complex/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_1100/brand-adidas_szhbza.jpg" alt="Adidas" />
            </button>
            <button onClick={() => navigate('/sneakers/reebok')} className={path === '/sneakers/reebok' ? 'brand-button brand-button--active' : 'brand-button'}>
                <img src="https://i2.wp.com/elpoderdelasideas.com/wp-content/uploads/rebook-logo-2.jpg" alt="Reebok" />
            </button>
            <button onClick={() => navigate('/sneakers/vans')} className={path === '/sneakers/vans' ? 'brand-button brand-button--active' : 'brand-button'}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_lklF4OMHhWqHm3VzfDvnLRGsvBZdlYU14Sj98nC6P9PoMAfWs6_PsrGvHnL_TBrK_qU&usqp=CAU" alt="Vans" />
            </button>
            <button onClick={() => navigate('/sneakers/puma')} className={path === '/sneakers/puma' ? 'brand-button brand-button--active' : 'brand-button'}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8C_HcN5JkPC_T6cesZxYy-eYKUXvl5nndFA&usqp=CAU" alt="Puma" />
            </button>
            <button onClick={() => navigate('/sneakers/yeezy')} className={path === '/sneakers/yeezy' ? 'brand-button brand-button--active' : 'brand-button'}>
                <img src="https://i.pinimg.com/736x/c6/49/e1/c649e12ca1a0aa51b275e0383e912945--corporate-logos-logo-google.jpg" alt="Yeezy" />
            </button>
            <button onClick={() => navigate('/sneakers/converse')} className={path === '/sneakers/converse' ? 'brand-button brand-button--active' : 'brand-button'}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNYD0vo7bzkHKy3_-trtKP8Kwm8A7MhdwyxA&usqp=CAU" alt="Converse" />
            </button>
            <button onClick={() => navigate('/sneakers/new_balance')} className={path === '/sneakers/new_balance' ? 'brand-button brand-button--active' : 'brand-button'}>
                <img src="https://i.pinimg.com/474x/4e/bd/3f/4ebd3f0c61ec02a03ba23d7ee550abcc.jpg" alt="New Balance" />
            </button>
            <button onClick={() => navigate('/sneakers/others')} className={path === '/sneakers/others' ? 'brand-button brand-button--active' : 'brand-button'}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58IzDe08VO7RLoYa3e_XEyeFay6ndmsRBSg&usqp=CAU" alt="Others" />
            </button>
        </div>
    )
}

export default BrandButtons;