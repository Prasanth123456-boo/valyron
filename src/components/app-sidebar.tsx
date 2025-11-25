import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import {
  Home,
  ShoppingCart,
  FileText,
  Receipt,
  ArrowLeftRight,
  Users,
  Package,
  BarChart3,
  Settings,
  ChevronDown,
  Building2,
  Truck,
  DollarSign,
  FileCheck,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export function AppSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const menuItems = [
    {
      title: "Dashboard",
      icon: Home,
      route: "/dashboard",
    },
    {
      title: "Sales",
      icon: DollarSign,
      items: [
        { name: "Sales Invoice", icon: Receipt, route: "/sales-invoice" },
        { name: "Sales Order", icon: ShoppingCart, route: "/sales-order" },
        { name: "Estimate / Quotation", icon: FileText, route: "/sales-estimate" },
        { name: "Sales Return", icon: ArrowLeftRight, route: "/sales-return" },
      ],
    },
    {
      title: "Purchase",
      icon: Truck,
      items: [
        { name: "Purchase Invoice", icon: Receipt, route: "/purchase-invoice" },
        { name: "Purchase Order", icon: ShoppingCart, route: "/purchase-order" },
        { name: "Purchase Return", icon: ArrowLeftRight, route: "/purchase-return" },
      ],
    },
    {
      title: "Contacts",
      icon: Users,
      items: [
        { name: "Customers", icon: Building2, route: "/customers" },
        { name: "Suppliers", icon: Truck, route: "/suppliers" },
      ],
    },
    { title: "Inventory", icon: Package, route: "/inventory" },
    { title: "Reports", icon: BarChart3, route: "/reports" },
    { title: "Settings", icon: Settings, route: "/settings" },
  ];

  const isActive = (route: string) => location.pathname === route;

  return (
    <TooltipProvider delayDuration={0}>
      <Sidebar collapsible="icon" className="border-r bg-white">
        {/* Header - Logo */}
        <SidebarHeader className="h-16 border-b flex items-center justify-center px-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
              V
            </div>
            <span className="font-bold text-xl text-gray-800 hidden lg:block">
              Valyron ERP
            </span>
          </div>
        </SidebarHeader>

        <SidebarContent className="pt-4">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-1">
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    {item.route ? (
                      /* Single Item */
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <SidebarMenuButton
                            size="lg"
                            onClick={() => navigate(item.route!)}
                            className={cn(
                              "w-full justify-start font-medium transition-all",
                              isActive(item.route!)
                                ? "bg-primary/10 text-primary hover:bg-primary/20"
                                : "hover:bg-gray-100"
                            )}
                          >
                            <item.icon className="h-5 w-5" />
                            <span>{item.title}</span>
                          </SidebarMenuButton>
                        </TooltipTrigger>
                        <TooltipContent side="right">{item.title}</TooltipContent>
                      </Tooltip>
                    ) : (
                      /* Group with Submenu */
                      <>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <SidebarMenuButton
                              size="lg"
                              onClick={() =>
                                setOpenMenu(openMenu === item.title ? null : item.title)
                              }
                              className={cn(
                                "w-full justify-start font-medium transition-all",
                                "hover:bg-gray-100"
                              )}
                            >
                              <item.icon className="h-5 w-5" />
                              <span>{item.title}</span>
                              <ChevronDown
                                className={cn(
                                  "ml-auto h-4 w-4 transition-transform duration-200",
                                  openMenu === item.title && "rotate-180"
                                )}
                              />
                            </SidebarMenuButton>
                          </TooltipTrigger>
                          <TooltipContent side="right">{item.title}</TooltipContent>
                        </Tooltip>

                        {/* Submenu - Proper Shadcn Structure */}
                        <SidebarMenuSub
                          className={cn(
                            "ml-2 border-l-2 border-gray-200 transition-all duration-300",
                            openMenu === item.title
                              ? "max-h-96 opacity-100"
                              : "max-h-0 opacity-0 overflow-hidden"
                          )}
                        >
                          {item.items?.map((sub) => (
                            <SidebarMenuSubItem key={sub.name}>
                              <SidebarMenuSubButton
                                asChild
                                className={cn(
                                  "w-full justify-start text-sm font-normal py-2.5 pl-8",
                                  isActive(sub.route)
                                    ? "text-primary bg-primary/5 font-medium"
                                    : "hover:bg-gray-100"
                                )}
                              >
                                <button onClick={() => navigate(sub.route)}>
                                  <sub.icon className="h-4 w-4 mr-2" />
                                  <span>{sub.name}</span>
                                </button>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        {/* Footer - User */}
        <SidebarFooter className="border-t p-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 ring-2 ring-gray-200">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>PA</AvatarFallback>
            </Avatar>
            <div className="hidden lg:block">
              <p className="text-sm font-semibold text-gray-800">Prasad A</p>
              <p className="text-xs text-gray-500">admin@valyronlabs.com</p>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
    </TooltipProvider>
  );
}